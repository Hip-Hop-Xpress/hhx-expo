import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import strings from '../assets/strings';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

const VariationComponent = ({name, date, description, images, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          navigation.navigate(strings.variations.individualScreenName, {
            name: name,
            date: date,
            description: description,
            images: images,
          })
      }>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const styles = StyleSheet.create({

});

export default VariationComponent;
