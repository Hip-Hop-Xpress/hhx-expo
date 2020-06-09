import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

/**
 * Clickable icon showing project information
 * 
 * @param {string} title name of the project
 * @param {string} body description of the project
 * @param {string} members string repr of all members
 * @param {string} icon type of icon from MaterialCommunityIcons
 * @param {boolean} isSelected whether the project component is selected
 * @param {Function} setSelected notifies ProjectList that current project has been selected
 */
const ProjectComponent = ({title, body, members, icon, isSelected, setSelected}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, globalStyles.illiniOrange]}
        onPress={setSelected}
        activeOpacity={0.75}>
        <MaterialCommunityIcons name={icon} color={'white'} size={65} />
        <Text style={styles.projectName}>{title}</Text>
      </TouchableOpacity>

      {/* Body text */}
      {isSelected ? (
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>{title}</Text>
          <Text style={styles.members}>{members}</Text>
          <Text style={styles.projectText}>{body} </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 28,
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  projectName: {
    fontFamily: Fonts.KARLA_REGULAR,
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
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  members: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 18,
    marginBottom: 10,
  },
  projectText: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 16,
  },
});

export default ProjectComponent;
