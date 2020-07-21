import React from 'react';

import UpdateComponent from './updateComponent';
import UPDATES from '../api/constants/updates';

const UpdatesList = props => {
  let key = 0;

  const Updates = UPDATES.map(update => (
    <UpdateComponent
      title={update.title}
      body={update.body}
      date={update.date}
      key={key++}
      navigation={props.navigation}
    />
  ));

  return <>{Updates}</>;
};

export default UpdatesList;
