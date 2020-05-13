import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

export default function Header() {
  return (
    <View style={styles.illiniBlueBackground}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require('../assets/hhx_logo_transparent.png')}
      />
    </View>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  illiniBlueBackground: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
  logo: {
    marginVertical: 10,
    marginHorizontal: win.width / 3.9,
    width: 209,
    height: 25,
  },
});
