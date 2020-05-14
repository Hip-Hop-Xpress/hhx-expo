import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
      <View style={styles.updateContainer}>
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
    backgroundColor: 'rgba(232, 74, 39, 0.95)',
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
    fontSize: 17,
    fontWeight: '400',
    color: Colors.white,
  },
});

export default UpdateComponent;
