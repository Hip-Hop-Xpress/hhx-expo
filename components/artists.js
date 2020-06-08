import React from 'react';

import ArtistComponent from './artistComponent';

import strings from '../assets/strings';

/**
 * List of all artists previously featured by HHX.
 * 
 * @param {Object} navigation navigation object from Featured Stack, lets user click to artist page 
 */
const Artists = ({navigation}) => {
  let artistsList = strings.featured.artistList;
  let key = 0;
  
  const ArtistsList = artistsList.map(artist => (
    artist.current ? null : (
    <ArtistComponent
      name={artist.artistName}
      date={artist.date}
      title={artist.bioTitle}
      bio={artist.bioBody}
      socialMedia={artist.socialMedia}
      navigation={navigation}
      key={key++}
    />
  )));

  return (
    <>
      {ArtistsList}
    </>);
};

export default Artists;
