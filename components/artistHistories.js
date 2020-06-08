import React from 'react';

import ArtistHistoryComponent from './artistHistoryComponent';

import strings from '../assets/strings';

const ArtistHistories = props => {
  let artistHistories = strings.artistHistories.list;
  let key = 0;

  const ArtistHistoriesList = artistHistories.map(artistHistory => (
    <ArtistHistoryComponent
      title={artistHistory.name}
      paragraphs={artistHistory.description}
      images={artistHistory.images}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return <>{ArtistHistoriesList}</>;
};

export default ArtistHistories;
