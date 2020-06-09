import React from 'react';

import UpdateComponent from './updateComponent';
import updates from '../api/constants/updates';

const Updates = props => {
  let key = 0;

  const UpdatesList = updates.map(update => (
    <UpdateComponent
      title={update.title}
      body={update.body}
      date={update.date}
      key={key++}
      navigation={props.navigation}
    />
  ));

  return <>{UpdatesList}</>;
};

export default Updates;
