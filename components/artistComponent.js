import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/global';

const ArtistComponent = props => {
  const artist = (
    <TouchableOpacity
      activeOpacity={0.75}
      // onPress={}
    >
      <View style={[styles.artistContainer]}>
        <Text style={styles.artistName}>{props.name}</Text>
        <Text >{props.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return artist;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({
  artistContainer: {
    width: width,
    padding: 10,
  },
  artistName: {
    color: 'white',
    fontSize: 15,
  },
});

export default ArtistComponent;
