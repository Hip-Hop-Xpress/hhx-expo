import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import globalStyles from '../../styles/global';

const Artist = props => {
  const {name} = props.route.params;
  const {date} = props.route.params;
  const {title} = props.route.params;
  const {bio} = props.route.params;
  // TODO: figure out how to get social media icons

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <View style={[styles.body, globalStyles.illiniBlue]}>
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Text>{title}</Text>
            <Text>{bio}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {},
  titleText: {},
  title: {},
  body: {},
});

export default Artist;
