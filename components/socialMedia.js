import React from 'react';

import {
  StyleSheet,
  View,
  Linking,
} from 'react-native';

import {SocialIcon} from 'react-native-elements';
import strings from '../assets/strings/strings';

const SocialMedia = () => {
  return (
    <View style={styles.socialMediaContainer}>
      <SocialMediaIcons />
    </View>
  );
}

const SocialMediaIcons = () => {
  const platforms = strings.socialMedia.platforms;
  const iconSize = 24;
  let key = 0;

  const Icons = platforms.map(platform => (
    <SocialIcon
      type={platform.type}
      button={true}
      style={styles.socialMediaButton}
      iconSize={iconSize}
      onPress={() => {
        Linking.openURL(platform.link);
      }}
      key={key++}
    />
  ));

  return <>{Icons}</>;
}

const styles = StyleSheet.create({
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});

export default SocialMedia;