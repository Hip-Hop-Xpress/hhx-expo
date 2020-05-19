import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Header from '../../components/header';
import strings from '../../assets/strings/strings';

import globalStyles from '../../styles/global';

export default function Participants() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniBlue}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Bus image */}
            <Image
              style={styles.topImage}
              source={require('../../assets/hhx_team.jpg')}
            />
            {/* Text over bus image */}
            <View style={styles.topView}>
              <Text style={[styles.topText, globalStyles.illiniBlue]}>{strings.participants.title}</Text>
            </View>
          </View>

          {/* Body */}
          <View style={[styles.body]}>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.participants.subtitle}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    height: 250,
    flex: 1,
  },
  topText: {
    fontFamily: 'Montserrat-Black',
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  introText: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 24,
    marginBottom: 30,
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },
});
