import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import * as Fonts from '../styles/fonts';

const ParticipantImages = props => {
  let images = props.images;
  let key = 0;

  const Images = images.map(image => (
    <ParticipantImage
      url={image.url}
      caption={image.caption}
      key={key++}
    />
  ));

  return <>{Images}</>;
}

const ParticipantImage = props => {
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
    marginBottom: 10,
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

export default ParticipantImages;