import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../styles/global';

const ArtistHistoryComponent = props => {
  const artistHistory = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('ArtistHistory', {
            title: props.title,
            paragraphs: props.paragraphs,
            images: props.images,
          })
      }>
      <View style={[styles.artistHistoryContainer, globalStyles.illiniBlue]}>
        <Text style={styles.artistHistoryTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return artistHistory;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({
  artistHistoryContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    margin: 2,
    width: width / 2 - 8,
    height: height / 6,
  },
  artistHistoryTitle: {
    fontFamily: 'Karla-Regular',
    fontSize: 21,
    textAlign: 'left',
    textAlignVertical: "bottom",
    color: 'white',
    marginBottom: 10,
  },
  artistHistorySubtitle: {
    fontFamily: 'Karla-BoldItalic',
    fontSize: 17,
    textAlign: 'right',
    color: 'white',
  },
  artistHistoryDescription: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export default ArtistHistoryComponent;
