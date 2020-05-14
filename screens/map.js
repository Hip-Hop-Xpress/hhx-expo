import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Linking,
} from 'react-native';

import Header from '../components/header';
import strings from '../assets/strings/strings';
import coords from '../assets/coords';

import {SocialIcon} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import globalStyles from '../styles/global';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
  const locateBus = {
    latitude: coords.busLocation.latitude,
    longitude: coords.busLocation.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

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
              <Text style={styles.titleText}>{strings.maps.title}</Text>
            </View>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.maps.subtitle}</Text>

            {/* Map */}
            <View style={styles.mapContainer}>
              <MapView
                style={styles.mapStyle}
                provide={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                  latitude: coords.mapStartLat,
                  longitude: coords.mapStartLong,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}>
                <MapView.Marker coordinate={locateBus} />
              </MapView>
            </View>

            {/* Request */}
            <Text style={styles.introText}>{strings.maps.request}</Text>

            {/* Contacts */}
            <View style={styles.socialMediaContainer}>
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
                type="envelope"
                button={true}
                style={styles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('mailto:wmpatter@illinois.edu');
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
  },
  introText: {
    fontFamily: 'Karla-BoldItalic',
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
  mapContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  mapStyle: {
    height: 400,
    width: '100%',
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
});
