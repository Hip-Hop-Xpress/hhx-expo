import React from 'react';

import ParticipantComponent from './participantComponent';

import strings from '../assets/strings/strings';

const Participants = props => {
  let participants = strings.participants.list;
  let key = 0;

  const ParticipantsList = participants.map(participant => (
    <ParticipantComponent
      title={participant.name}
      paragraphs={participant.description}
      images={participant.images}
      key={key++}
    />
  ));

  return <>{ParticipantsList}</>;
};

export default Participants;
