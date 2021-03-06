import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  YellowBox
} from 'react-native';

import VariationsList from '../../components/variationsList';

import strings from '../../assets/strings';

import * as Colors from '../../styles/colors';
import * as Fonts from '../../styles/fonts';
import globalStyles from '../../styles/global';

const Variations = (props) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.areaView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Title */}
            <View style={styles.topView}>
              <Text style={styles.title}>
                {strings.variations.title}
              </Text>
              <Text style={styles.subtitle}>
                {strings.variations.subtitle}
              </Text>
            </View>
          </View>

          <View style={styles.variationsContainer}>
            <VariationsList navigation={props.navigation} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: Colors.ILLINI_BLUE,
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ILLINI_ORANGE,
  },
  topImage: {
    height: 250,
    flex: 1,
  },
  title: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.KARLA_REGULAR,
    color: 'white',
    fontSize: 23,
    padding: 15,
    paddingBottom: 20,
    textAlign: 'center',
  },
  variationsContainer: {
    paddingVertical: 30,
  },
});

export default Variations;
