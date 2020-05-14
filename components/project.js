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
          <Text style={styles.title}>{props.topText}</Text>
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
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  projectInfo: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 15,
  },
  members: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectText: {
    fontSize: 16,
  },
});

export default Project;
