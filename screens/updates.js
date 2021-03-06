import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header';
import UpdatesList from '../components/updatesList';
import strings from '../assets/strings';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Updates = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="default-content" />
      <SafeAreaView style={{backgroundColor: Colors.ILLINI_BLUE}}>
        <Header />
      </SafeAreaView>
      {/* Body */}
      <View style={styles.body}>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>{strings.updates.title}</Text>
        </View>
        <UpdatesList navigation={navigation} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
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
    marginBottom: 0,
    paddingBottom: 140,
  },

});

export default Updates;
