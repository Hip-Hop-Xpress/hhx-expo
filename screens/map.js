import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// Components
import Header from '../components/header';
import SocialMedia from '../components/socialMedia';

// Strings/data
import strings from '../assets/strings';
import {COORDS} from '../api/constants/coords';

// Styles
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
  const locateBus = {
    latitude: COORDS.busLocation.latitude,
    longitude: COORDS.busLocation.longitude,
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
                  latitude: COORDS.mapStartLat,
                  longitude: COORDS.mapStartLong,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}>
                <MapView.Marker coordinate={locateBus} />
              </MapView>
            </View>

            {/* Request */}
            <Text style={styles.introText}>{strings.maps.request}</Text>

            {/* Contacts */}
            <SocialMedia platforms={strings.maps.socialMediaPlatforms} />
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
    fontFamily: Fonts.KARLA_REGULAR,
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
