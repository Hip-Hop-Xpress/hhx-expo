import React from 'react';
import ArtistHistoryComponent from './artistHistoryComponent';
import ARTIST_HISTORIES from '../api/constants/artistHistories';

/**
 * List of all artists featured on the Double Dutch Boom Bus
 * Comprised of ArtistHistoryComponents
 * 
 * @param {Object} props data to be passed to artist history components and screen
 */
const ArtistHistoriesList = props => {
  let key = 0;

  const ArtistHistories = ARTIST_HISTORIES.map(artistHistory => (
    <ArtistHistoryComponent
      title={artistHistory.name}
      paragraphs={artistHistory.description}
      images={artistHistory.images}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return <>{ArtistHistories}</>;
};

export default ArtistHistoriesList;
