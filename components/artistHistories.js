import React from 'react';

import ArtistHistoryComponent from './artistHistoryComponent';

import strings from '../assets/strings/strings';

const ArtistHistories = props => {
  let ArtistHistories = strings.artistHistories.list;
  let key = 0;

  const ArtistHistoriesList = ArtistHistories.map(artistHistory => (
    <ArtistHistoryComponent
      title={artistHistory.name}
      paragraphs={artistHistory.description}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return <>{ArtistHistoriesList}</>;
};

export default ArtistHistories;
