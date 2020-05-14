import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Header from '../components/header';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 40;

const Update = props => {
  const {title} = props.route.params;
  const {body} = props.route.params;
  const {navigation} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.illiniBlueBackground}>
          {/* Screen body */}
          <View style={[styles.body, styles.illiniBlueBackground]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>

            {/* Text body */}
            <View style={[styles.body, styles.illiniBlueBackground]}>
              <Text style={styles.bodyText}>{body}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color="lightgray"
                size={iconSize}
                style={styles.backButton}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(232, 74, 39, 1.0)',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  bodyText: {
    fontSize: 21,
    color: 'lightgray',
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
  backButton: {
    backgroundColor: 'rgba(232, 74, 39, 0.5)',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
    marginBottom: 40,
  },
  illiniBlueBackground: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
});

export default Update;
