import React from 'react';
import { List } from 'semantic-ui-react';

const CastMember = (props) =>
    <List.Item>
      <a href={"http://www.imdb.com/name/" + props.imdb} target="_blank">
        {props.name}
      </a>
    </List.Item>

export default CastMember;
