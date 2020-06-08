import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header';
import strings from '../assets/strings';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

export default function Voting() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniBlue}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <View style={[styles.body]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{strings.voting.title}</Text>
            </View>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.voting.subtitle}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  introText: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 30,
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },

});
