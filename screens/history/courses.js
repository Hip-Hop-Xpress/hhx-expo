import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Timeline from 'react-native-timeline-flatlist'

// Text/data
import strings from '../../assets/strings';
import COURSES_DATA from '../../api/constants/coursesData';

// Styles
import globalStyles from '../../styles/global';
import * as Fonts from '../../styles/fonts';
import * as Colors from '../../styles/colors';

/**
 * Screen showcasing past courses held by the Hip Hop Xpress
 */
const Courses = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniBlue}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">

          {/* Text over top image */}
          <View style={styles.topView}>
            <Text style={[styles.topText, globalStyles.illiniBlue]}>{strings.courses.title}</Text>
          </View>

          {/* Body */}
          <View style={styles.body}>
            <Timeline 
              style={styles.list}
              data={COURSES_DATA}
              separator={true}
              circleSize={20}
              circleColor={Colors.ILLINI_BLUE}
              lineColor={Colors.ILLINI_BLUE}
              timeContainerStyle={{minWidth:95, marginTop: -5}}
              timeStyle={styles.timeStyle}
              options={{
                style:{paddingTop:5}
              }}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topImage: {
    height: 250,
    flex: 1,
  },
  topText: {
    fontFamily: 'Montserrat-Black',
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
    padding: 20,
  },
  timeStyle: {
    textAlign: 'center', 
    backgroundColor:'rgba(232, 74, 39, 0.85)', 
    color:'white', 
    padding:5, 
    borderRadius:13,
    overflow: 'hidden'
  },
});

export default Courses;
