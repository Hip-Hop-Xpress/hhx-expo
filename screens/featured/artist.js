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

import {SocialIcon} from 'react-native-elements';

import globalStyles from '../../styles/global';
import featuredStyles from '../../styles/featuredStyles';

import strings from '../../assets/strings/strings';

const Artist = props => {
  const {name} = props.route.params;
  const {date} = props.route.params;
  const {title} = props.route.params;
  const {bio} = props.route.params;
  // TODO: figure out how to get social media icons

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={featuredStyles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <View style={[featuredStyles.body, globalStyles.illiniBlue]}>
            {/* Top image/title card */}
            <View>
              {/* Artist's image */}
              <Image
                source={require('../../assets/featured/default/default_header_blurred.jpg')}
              />
              {/* Text over artist image */}
              <View style={featuredStyles.imageCard}>
                <Text style={featuredStyles.artistNameText}>
                  {name}
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
                source={require('../../assets/featured/default/default_header.jpeg')}
              />
              <Text style={featuredStyles.dateText}>
                {date}
              </Text>
            </View>

            {/* Social Media Container */}
            <View
              style={[
                featuredStyles.socialMediaContainer,
                globalStyles.illiniBlue,
              ]}>
                {/* TODO: Social media icons go here */}
            </View>

            {/* Bio */}
            <View style={[globalStyles.illiniBlue, featuredStyles.bioContainer]}>
              <Text style={featuredStyles.bioTitle}>{title}</Text>
              <Text style={featuredStyles.bioBody}>{bio}</Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Artist;
