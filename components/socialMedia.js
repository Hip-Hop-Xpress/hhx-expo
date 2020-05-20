import React from 'react';

import {
  StyleSheet,
  View,
  Linking,
} from 'react-native';

import {SocialIcon} from 'react-native-elements';

const iconSize = 24;

const SocialMedia = () => {
  return (
    <View style={styles.socialMediaContainer}>
      <SocialIcon
        type="instagram"
        button={true}
        style={styles.socialMediaButton}
        iconSize={iconSize}
        onPress={() => {
          Linking.openURL('https://www.instagram.com/uiuchhx/');
        }}
      />
      <SocialIcon
        type="facebook"
        button={true}
        style={styles.socialMediaButton}
        iconSize={iconSize}
        onPress={() => {
          Linking.openURL('https://www.facebook.com/uiuchhx/');
        }}
      />
      <SocialIcon
        type="soundcloud"
        button={true}
        style={styles.socialMediaButton}
        iconSize={iconSize}
        onPress={() => {
          Linking.openURL('https://soundcloud.com/user-255537652');
        }}
      />
      <SocialIcon
        type="twitter"
        button={true}
        style={styles.socialMediaButton}
        iconSize={iconSize}
        onPress={() => {
          Linking.openURL('https://twitter.com/UIUChhx');
        }}
      />
    </View>
  );
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