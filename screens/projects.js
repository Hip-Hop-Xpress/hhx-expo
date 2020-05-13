import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Header from '../components/header';
import * as Font from 'expo-font';

// (async () => {
//   await loadAsync({
//     // Load a font `Montserrat` from a static resource
//     Montserrat: require('../assets/fonts/Montserrat.ttf'),

//     // Any string can be used as the fontFamily name. Here we use an object to provide more control
//     'Montserrat-SemiBold': {
//       uri: require('../assets/fonts/Montserrat-SemiBold.ttf'),
//       fontDisplay: FontDisplay.FALLBACK,
//     },
//   });
// })();

export default function Projects() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.illiniBlueBackground}>
        <Header />
          <ScrollView>
            <View style={styles.container}>
              <Text>Projects Screen</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
  },
  illiniBlueBackground: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
});
