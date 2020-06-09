import React from 'react';
import {View, Text, Image} from 'react-native';

import SocialMedia from './socialMedia';

import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';

import strings from '../assets/strings';

/**
 * Shows a featured artist's information
 * @param {string} name        name of artist
 * @param {string} date        date the artist was featured
 * @param {string} bio         body paragraphs describing the artist
 * @param {string} title       title of the artist's bio
 * @param {Array}  socialMedia holds all artist's social media platforms
 */
const ArtistBodyContent = ({name, date, bio, title, socialMedia}) => {
  return (
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
          source={require('../assets/featured/default/default_profile.jpg')}
        />
        <Text style={featuredStyles.dateText}>
          {date}
        </Text>
      </View>

      {/* Social Media Container */}
      <View style={globalStyles.illiniBlue}>
          <SocialMedia platforms={socialMedia} />
      </View>

      {/* Bio */}
      <View style={[globalStyles.illiniBlue, featuredStyles.bioContainer]}>
        <Text style={featuredStyles.bioTitle}>{title}</Text>
        <Text style={featuredStyles.bioBody}>{bio}</Text>
      </View>

    </View>
  );
}

export default ArtistBodyContent;
