import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Project = props => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    paddingBottom: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E84A27',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
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
