import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header';
import ProjectsList from '../components/projectsList';
import strings from '../assets/strings/strings';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Projects() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.illiniBlueBackground}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <View style={styles.body}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{strings.projects.title}</Text>
            </View>
            {/* Subtitle */}
            <Text style={styles.introText}>{strings.projects.subtitle}</Text>
            {/* Projects list */}
            <ProjectsList />
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
    backgroundColor: 'white',
  },
  titleText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  introText: {
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 18,
    marginBottom: 30,
  },
  body: {
    backgroundColor: Colors.white,
    marginBottom: 40,
    paddingBottom: 40,
  },
  illiniBlueBackground: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
});
