import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import strings from '../assets/strings';

const ParticipantComponent = props => {
  const participant = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate(strings.participants.individualScreenName, {
            title: props.title,
            paragraphs: props.paragraphs,
            images: props.images,
          })
      }>
      <View style={[styles.participantContainer, globalStyles.illiniOrange]}>
        <Text style={styles.participantTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return participant;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({
  participantContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    margin: 2,
    width: width / 2 - 8,
    height: height / 6,
  },
  participantTitle: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 21,
    textAlign: 'left',
    textAlignVertical: "bottom",
    color: 'white',
    marginBottom: 10,
  },
  participantSubtitle: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 17,
    textAlign: 'right',
    color: 'white',
  },
  participantDescription: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export default ParticipantComponent;
