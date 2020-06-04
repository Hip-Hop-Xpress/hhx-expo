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

import {SocialIcon} from 'react-native-elements';

import Header from '../components/header';
import Artists from '../components/artists';
import strings from '../assets/strings/strings';

// Styles
import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';


const Featured = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.illiniBlue]}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <View style={[featuredStyles.body, globalStyles.illiniBlue]}>
            {/* Top image/title card */}
            <View>
              {/* Artist's image */}
              <Image
                source={require('../assets/featured/default/default_header_blurred.jpg')}
              />
              {/* Text over artist image */}
              <View style={featuredStyles.imageCard}>
                <Text style={featuredStyles.artistNameText}>
                  {strings.featured.artistName}
                </Text>
              </View>
            </View>

            {/* Title */}
            <View style={featuredStyles.title}>
              <Text style={featuredStyles.titleText}>
                {strings.featured.title}
              </Text>
              {/* Artist image */}
              <Image
                style={featuredStyles.artistImage}
                source={require('../assets/featured/default/default_header.jpeg')}
              />
              <Text style={featuredStyles.dateText}>
                {strings.featured.date}
              </Text>
            </View>

            {/* Social Media Container */}
            <View
              style={[
                featuredStyles.socialMediaContainer,
                globalStyles.illiniBlue,
              ]}>
              <SocialIcon
                type="instagram"
                button={true}
                style={featuredStyles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://www.instagram.com/uiuchhx/');
                }}
              />
              <SocialIcon
                type="facebook"
                button={true}
                style={featuredStyles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/uiuchhx/');
                }}
              />
              <SocialIcon
                type="soundcloud"
                button={true}
                style={featuredStyles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://soundcloud.com/user-255537652');
                }}
              />
              <SocialIcon
                type="twitter"
                button={true}
                style={featuredStyles.socialMediaButton}
                iconSize={24}
                onPress={() => {
                  Linking.openURL('https://twitter.com/UIUChhx');
                }}
              />
            </View>

            {/* Bio */}
            <View style={[globalStyles.illiniBlue, featuredStyles.bioContainer]}>
              <Text style={featuredStyles.bioTitle}>{strings.featured.bioTitle}</Text>
              <Text style={featuredStyles.bioBody}>{strings.featured.bioBody}</Text>
            </View>

            {/* Past artists */}
            <View style={featuredStyles.pastArtistsBody}>
              <Text style={featuredStyles.pastArtistsTitle}>{strings.featured.pastArtists}</Text>
              <View style={featuredStyles.artistsContainer}>
                <Artists navigation={navigation}/>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Featured;
