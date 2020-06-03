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
import Artists from '../components/artists';
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
            {/* Top image/title card */}
            <View>
              {/* Artist's image */}
              <Image
                source={require('../assets/featured/default/default_header_blurred.jpg')}
              />
              {/* Text over artist image */}
              <View style={styles.imageCard}>
                <Text style={styles.artistNameText}>
                  {strings.featured.artistName}
                </Text>
              </View>
            </View>

            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>
                {strings.featured.title}
              </Text>
              {/* Artist image */}
              <Image
                style={styles.artistImage}
                source={require('../assets/featured/default/default_header.jpeg')}
              />
              <Text style={styles.dateText}>
                {strings.featured.date}
              </Text>
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

            {/* Past artists */}
            <View style={styles.pastArtistsBody}>
              <Text style={styles.pastArtistsTitle}>{strings.featured.pastArtists}</Text>
              <View style={styles.artistsContainer}>
                <Artists />
              </View>
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
    fontSize: 29,
    textAlign: 'center',
    color: 'lightgray',
  },
  artistImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 20,
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
  dateText: {
    fontFamily: 'Karla-BoldItalic',
    textAlign: 'center',
    fontSize: 20,
    color: 'lightgray',
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
  pastArtistsBody: {
    backgroundColor: '#121212',
    marginVertical: 20,
  },
  pastArtistsTitle: {
    color: 'lightgray',
    fontSize: 30,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    marginVertical: 20,
  },
  artistsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "center",
  },
});
