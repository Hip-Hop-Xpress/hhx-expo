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

const Participant = props => {
  const {title} = props.route.params;
  const {paragraphs} = props.route.params;
  const {images} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <View style={[styles.body, globalStyles.illiniBlue]}>
            {/* Title (name) */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{/* name/title goes here */}</Text>
            </View>

            {/* Subtitle */}
            <View>
              {/* subtitle goes here */}
            </View>

            {/* Body */}
            <View style={[styles.body, globalStyles.illiniBlue]}>
              {/* body goes here */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    fontFamily: 'Montserrat-Black',
    fontSize: 30,
    textAlign: 'center',
    color: 'rgba(232, 74, 39, 1.0)',
  },
  title: {
    fontFamily: 'Montserrat-Black',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
});

export default Participant;
