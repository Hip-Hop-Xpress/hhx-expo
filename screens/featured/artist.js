import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import globalStyles from '../../styles/global';

const Artist = props => {
  // Get variables using props.route.params, like below:

  // const {title} = props.route.params;
  // const {paragraphs} = props.route.params;
  // const {images} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <View style={[styles.body, globalStyles.illiniBlue]}>
            {/* Content goes here */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {},
  titleText: {},
  title: {},
  body: {},
});

export default Artist;
