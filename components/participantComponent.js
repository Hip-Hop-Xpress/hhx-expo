import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';

const ParticipantComponent = props => {
  const participant = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('Participant', {
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

const styles = StyleSheet.create({
  participantContainer: {
    marginVertical: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
  },
  participantTitle: {
    fontFamily: 'Karla-Regular',
    fontSize: 19,
    textAlign: 'left',
    color: 'white',
    marginBottom: 10,
  },
  participantSubtitle: {
    fontFamily: 'Karla-BoldItalic',
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
