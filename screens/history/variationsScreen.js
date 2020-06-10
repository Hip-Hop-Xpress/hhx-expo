import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  YellowBox
} from 'react-native';

import strings from '../../assets/strings';

import * as Fonts from '../../styles/fonts';
import globalStyles from '../../styles/global';


const Variations = (props) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniOrange}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Top image */}
            <Image
              style={styles.topImage}
              source={require('../../assets/images/hhx-bus-art.jpeg')}
            />
            {/* Text over top image */}
            <View style={styles.topView}>
              <Text style={[styles.topText, globalStyles.illiniOrange]}>{strings.variations.title}</Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    height: 250,
    flex: 1,
  },
  topText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
});

export default Variations;
