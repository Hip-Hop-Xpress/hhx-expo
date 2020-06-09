import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

const VariationComponent = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('Variation', {
            // title: props.title,
            // paragraphs: props.paragraphs,
            // images: props.images,
          })
      }>
      <View style={}>
        <Text style={}>{/* title goes here */}</Text>
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
