import React from 'react';
import HistoryComponent from './historyComponent';
import PARTICIPANTS from '../api/constants/participants';
import strings from '../assets/strings';

/**
 * List of all participants comprised of HistoryComponents
 * @param {Object} props contains all data to be passed to the participant component and screen
 */
const ParticipantsList = props => {
  const screenName = strings.participants.individualScreenName;
  let key = 0;

  const Participants = PARTICIPANTS.map(participant => (
    <HistoryComponent
      title={participant.name}
      paragraphs={participant.description}
      images={participant.images}
      screenName={screenName}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return <>{Participants}</>;
};

export default ParticipantsList;
