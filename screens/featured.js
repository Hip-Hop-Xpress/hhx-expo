import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  Linking,
} from 'react-native';

import Header from '../components/header';
import strings from '../assets/strings/strings';
import globalStyles from '../styles/global';

import {SocialIcon} from 'react-native-elements';

export default function Featured() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.illiniBlue]}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <View style={[styles.body, globalStyles.illiniBlue]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{strings.featured.title}</Text>
            </View>

            {/* Top image/title card */}
            <View>
              {/* Bus image */}
              <Image
                style={styles.busImage}
                source={require('../assets/featured/default/default_header_blurred.jpg')}
              />
              {/* Text over bus image */}
              <View style={styles.imageCard}>
                <Text style={styles.artistNameText}>
                  {strings.featured.artistName}
                </Text>
              </View>
            </View>

            {/* Social Media Container */}
            <View
              style={[
                styles.socialMediaContainer,
                globalStyles.illiniBlue,
              ]}>
              <SocialIcon
                type="instagram"
                button={true}
                style={styles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://www.instagram.com/uiuchhx/');
                }}
              />
              <SocialIcon
                type="facebook"
                button={true}
                style={styles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/uiuchhx/');
                }}
              />
              <SocialIcon
                type="soundcloud"
                button={true}
                style={styles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://soundcloud.com/user-255537652');
                }}
              />
              <SocialIcon
                type="twitter"
                button={true}
                style={styles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://twitter.com/UIUChhx');
                }}
              />
            </View>

            {/* Bio */}
            <View style={[globalStyles.illiniBlue, styles.bioContainer]}>
              <Text style={styles.bioTitle}>{strings.featured.bioTitle}</Text>
              <Text style={styles.bioBody}>{strings.featured.bioBody}</Text>
            </View>
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
    fontFamily: 'Montserrat-Black',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
    color: 'lightgray',
  },
  imageCard: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistNameText: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    marginBottom: 15,
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    marginBottom: -1,
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
  bioContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  bioTitle: {
    fontFamily: 'Montserrat-Black',
    fontSize: 30,
    textAlign: 'center',
    color: 'rgba(232, 74, 39, 1.0)',
    marginBottom: 10,
  },
  bioBody: {
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    color: 'lightgray',
    lineHeight: 30,
  },
});
