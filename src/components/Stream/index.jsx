import React from 'react';

const Stream = (props) => {
  return (
    <a href={props.link} className="source"> {props.name} </a>
  )
}

export default Stream;
