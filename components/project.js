import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyles from '../styles/global';

const Project = props => {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, globalStyles.illiniOrange]}
        onPress={props.setSelected}
        activeOpacity={0.75}>
        <MaterialCommunityIcons name={props.icon} color={'white'} size={65} />
        <Text style={styles.projectName}>{props.topText} </Text>
      </TouchableOpacity>

      {/* Body text */}
      {props.isSelected ? (
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>{props.topText}</Text>
          <Text style={styles.members}>{props.members}</Text>
          <Text style={styles.projectText}>{props.bottomText} </Text>
        </View>
      ) : null}
    </>
  );
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 28,
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  projectName: {
    fontFamily: 'Karla-Regular',
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  projectInfo: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  projectTitle: {
    fontFamily: 'Montserrat-Black',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  members: {
    fontFamily: 'Karla-BoldItalic',
    fontSize: 18,
    marginBottom: 10,
  },
  projectText: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
  },
});

export default Project;
