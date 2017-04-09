import React from 'react';
import PricePopup from '../PricePopup';
import { Label, Popup, Grid } from 'semantic-ui-react';

const Stream = (props) => {
  if (props.price && props.price.length > 0){
    return (
      <Popup content={
        <Grid centered divided columns={props.price.length}>
          {props.price.map(p =>
            <PricePopup
              price={p.price}
              format={p.format}
              type={p.type}
              key={p.price + p.format}
            />
          )}
        </Grid> }
        trigger={ <Label basic><a href={props.link} target="_blank">{props.name}</a></Label> }
        flowing
        size='mini'
        inverted
      />
    )} else {
      return (
        <Label basic><a href={props.link} target="_blank">{props.name}</a></Label>
      )
    }
}

export default Stream;
