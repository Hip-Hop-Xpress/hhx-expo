import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import globalStyles from '../styles/global';

const ArtistComponent = props => {
  const artist = (
    <TouchableOpacity
      activeOpacity={0.75}
      // onPress={}
      style={styles.touchable}
    >
      <View style={[styles.artistContainer]}>
        <Image
          style={styles.artistImage}
          source={require('../assets/featured/default/default_header.jpeg')}
        />
        <Text style={styles.artistName}>{props.name}</Text>
        <Text style={styles.artistDate}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return artist;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const artistContainerPadding = 40;
const artistImageHeight = height / 5;
const artistImageWidth = width / 2 - artistContainerPadding * 1.5;

const styles = StyleSheet.create({
  artistContainer: {
    width: width / 2 - 1,
    padding: 40,
  },
  artistImage: {
    alignSelf: 'center',
    width: artistImageWidth,
    height: artistImageHeight,
    borderRadius: 100,
    marginBottom: 20,
  },
  artistName: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginVertical: 5,
    fontFamily: 'Karla-Regular',
  },
  artistDate: {
    color: 'lightgray',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontFamily: 'Karla-BoldItalic',
  },
  touchable: {
    backgroundColor: 'black',
  }
});

export default ArtistComponent;
