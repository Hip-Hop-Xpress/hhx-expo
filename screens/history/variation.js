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
import * as Fonts from '../../styles/fonts';
import * as Colors from '../../styles/colors';

const Variation = props => {
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
              <Text style={styles.titleText}>{title}</Text>
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
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.ILLINI_ORANGE,
  },
  title: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
});

export default Variation;