import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import * as Fonts from '../styles/fonts';

const ArtistHistoryImages = props => {
  let images = props.images;
  let key = 0;

  const Images = images.map(image => (
    <ArtistHistoryImage
      url={image.url}
      caption={image.caption}
      key={key++}
    />
  ));

  return <>{Images}</>;
}

const ArtistHistoryImage = props => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: props.url }} />
      <Text style={styles.caption}>{props.caption}</Text>
    </View>
  )
}

const imageSize = 270;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    marginTop: 25,
    width: imageSize,
    height: imageSize,
    borderRadius: 0,
  },
  caption: {
    fontSize: 15,
    textAlign: 'center',
    color: 'lightgray',
    fontFamily: Fonts.KARLA_BOLDITALIC,
  },
})

export default ArtistHistoryImages;