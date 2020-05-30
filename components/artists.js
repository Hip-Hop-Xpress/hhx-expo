import React from 'react';
import {Text} from 'react-native';

import ArtistComponent from './artistComponent';

import strings from '../assets/strings/strings';

const Artists = props => {
  let artistsList = strings.featured.artistList;
  let key = 0;
  
  const ArtistsList = artistsList.map(artist => {
    artist.current ? null : (
    <ArtistComponent
      name={artist.artistName}
      date={artist.date}
      title={artist.bioTitle}
      bio={artist.bioBody}
      socialMedia={artist.socialMedia}
      navigation={props.navigation}
      key={key++}
    />
  )});

  return (
    <>
      {ArtistsList}
    </>);
};

export default Artists;
