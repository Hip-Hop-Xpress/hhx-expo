import React from 'react';
import ParticipantComponent from './participantComponent';
import PARTICIPANTS from '../api/constants/participants';

/**
 * List of all participants comprised of ParticipantComponents
 * @param {Object} props contains all data to be passed to the participant component and screen
 */
const ParticipantsList = props => {
  let key = 0;

  const Participants = PARTICIPANTS.map(participant => (
    <ParticipantComponent
      title={participant.name}
      paragraphs={participant.description}
      images={participant.images}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return <>{Participants}</>;
};

export default ParticipantsList;
