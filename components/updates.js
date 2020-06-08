import React from 'react';

import UpdateComponent from './updateComponent';

import strings from '../assets/strings';

const Updates = props => {
  let updates = strings.home.updates;
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
