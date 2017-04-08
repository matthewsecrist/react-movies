import React from 'react';
import { Label } from 'semantic-ui-react';

const Stream = (props) => {
  return (
    <Label basic>
      <a href={props.link} target="_blank">{props.name}</a>
    </Label>
  )
}

export default Stream;
