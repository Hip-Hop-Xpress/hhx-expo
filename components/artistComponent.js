import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/global';

const ArtistComponent = props => {
  const artist = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={}>
      <View style={[styles.artistContainer]}>
        <Text style={styles.artistTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return artist;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({
  artistContainer: {},
  artistTitle: {},
});

export default ArtistComponent;
