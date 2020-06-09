import React from 'react';
import FeaturedArtistComponent from './featuredArtistComponent';
import FEATURED_ARTISTS from '../api/constants/featuredArtists';

/**
 * List of all artists previously featured by HHX.
 * 
 * @param {Object} navigation navigation object from Featured Stack, lets user click to artist page 
 */
const FeaturedArtistsList = ({navigation}) => {
  let key = 0;
  
  const Artists = FEATURED_ARTISTS.map(artist => (
    artist.current ? null : (
    <FeaturedArtistComponent
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
      {Artists}
    </>);
};

export default FeaturedArtistsList;
