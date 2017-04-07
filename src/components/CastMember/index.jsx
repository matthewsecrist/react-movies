import React from 'react';

const CastMember = (props) =>
    <p><a href={"http://www.imdb.com/name/" + props.imdb} target="_blank">{props.name}</a></p>

export default CastMember;
