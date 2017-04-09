import React from 'react';
import { Grid } from 'semantic-ui-react';

const PricePopup = (props) => {
  let type = props.type.charAt(0).toUpperCase() + props.type.slice(1)
  return (
      <Grid.Column textAlign='center'>
        <p className="ui header">{type + " " + props.format}</p>
        <p>${props.price}</p>
      </Grid.Column>

  )
}

export default PricePopup;
