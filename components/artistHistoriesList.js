import React from 'react';
import HistoryComponent from './historyComponent';
import ARTIST_HISTORIES from '../api/constants/artistHistories';
import strings from '../assets/strings';

/**
 * List of all artists featured on the Double Dutch Boom Bus
 * 
 * @param {Object} props data to be passed to artist history components and screen
 */
const ArtistHistoriesList = props => {
  const screenName = strings.artistHistories.individualScreenName;
  let key = 0;

  const ArtistHistories = ARTIST_HISTORIES.map(artistHistory => (
    <HistoryComponent
      title={artistHistory.name}
      paragraphs={artistHistory.description}
      images={artistHistory.images}
      navigation={props.navigation}
      screenName={screenName}
      key={key++}
    />
  ));

  return <>{ArtistHistories}</>;
};

export default ArtistHistoriesList;
