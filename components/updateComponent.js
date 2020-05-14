import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../styles/global';

const UpdateComponent = props => {
  const update = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('Update', {
            title: props.title,
            body: props.body,
            //navigation: props.navigation,
          })
      }>
      <View style={[styles.updateContainer, globalStyles.illiniOrange]}>
        <Text style={styles.updateTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return update;
};

const styles = StyleSheet.create({
  updateContainer: {
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
    borderRadius: 10,
  },
  updateTitle: {
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    color: Colors.white,
  },
  updateDescription: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.white,
  },
});

export default UpdateComponent;
