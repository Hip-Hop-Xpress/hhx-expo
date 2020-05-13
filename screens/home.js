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
  Button,
  Linking,
} from 'react-native';

import Header from '../components/header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SocialIcon} from 'react-native-elements';

export default function Home({navigation}) {
  // Projects button
  const projectNavButton = () => {
    // Finds the screen name component called 'Projects'
    navigation.navigate('Projects');
  };

  // App layout
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.illiniBlueBackground}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.illiniBlueBackground}>
          <View>
            {/* Bus image */}
            <Image
              style={styles.busImage}
              source={require('../assets/hhx_bus_blur_orange.jpg')}
            />
            {/* Text over bus image */}
            <View style={styles.topImage}>
              <Text style={styles.topIntroText}>WELCOME TO THE</Text>
              <Text style={styles.topTitleText}>
                DOUBLE DUTCH{'\n'}BOOM BUS
              </Text>
            </View>
          </View>

          {/* Body of Home Screen */}

          {/* Updates section */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Latest Updates</Text>
              <Text style={styles.sectionDescription}>
                Learn more about the Double Dutch Boom Bus Project, the history
                behind the Hip Hop Xpress, and what we're doing to help local
                communities.
              </Text>

              {/* List updates here: */}
              <View style={styles.updateContainer}>
                <Text style={styles.updateTitle}>
                  IMPORTANT: COVID-19 Update
                </Text>
                <Text style={styles.updateDescription}>
                  Find out how the Hip Hop Xpress can help you and your
                  community during the COVID-19 global pandemic.
                </Text>
              </View>
              <View style={styles.updateContainer}>
                <Text style={styles.updateTitle}>
                  HipHopXpress: Connecting School to Students
                </Text>
                <Text style={styles.updateDescription}>
                  The HipHopXpress is working to provide internet access to
                  local communities that lack internet connection. Stay updated
                  with us and our bus location through the app!
                </Text>
              </View>
              <View style={styles.updateContainer}>
                <Text style={styles.updateTitle}>
                  The Double Dutch Boom Bus is here!
                </Text>
                <Text style={styles.updateDescription}>
                  With the generosity of Sally K. Carter, our team was able to
                  purchase a school bus at an affordable price!{'\n\n'}The bus
                  been customized by It’s a Wrap and it is now ready for
                  University of Illinois students to begin work on the interior.
                  Artist John Jennings designed the graphics, and artist Stacey
                  Robinson is helping out with more imagery.{'\n\n'}We are
                  collaborating with the School of Architecture and the School
                  of Music to design and build the inside during a class
                  co-taught by Professors Erickson (Architecture), Kruse (Music)
                  and Patterson (Music and Engineering).
                </Text>
              </View>
              {/* End updates: */}
            </View>

            {/* History Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Our Goal</Text>
              <Text style={styles.sectionDescription}>
                The HipHop Xpress is an internet-connected mobile classroom and
                and sound studio, a means to collect oral histories, a
                cross-generational catalyst for music sharing and production,
                and a method to link communities across the state through music,
                dance, visual arts, and history.
              </Text>
            </View>

            {/* <Button title="Projects" onPress={projectNavButton} />*/}

            {/* Social Media Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Follow us on Social Media</Text>
              <View style={styles.socialMediaContainer}>
                <SocialIcon
                  type="instagram"
                  button={true}
                  style={styles.socialMediaButton}
                  iconSize={24}
                  onPress={() => {
                    Linking.openURL('https://www.instagram.com/uiuchhx/');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  button={true}
                  style={styles.socialMediaButton}
                  iconSize={24}
                  onPress={() => {
                    Linking.openURL('https://www.instagram.com/uiuchhx/');
                  }}
                />
                <SocialIcon
                  type="soundcloud"
                  button={true}
                  style={styles.socialMediaButton}
                  iconSize={24}
                  onPress={() => {
                    Linking.openURL('https://www.instagram.com/uiuchhx/');
                  }}
                />
                <SocialIcon
                  type="twitter"
                  button={true}
                  style={styles.socialMediaButton}
                  iconSize={24}
                  onPress={() => {
                    Linking.openURL('https://www.instagram.com/uiuchhx/');
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const imageWidth = 1077;
const imageHeight = 129;
const win = Dimensions.get('window');
const ratio = win.width / imageWidth;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
  topImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIntroText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topTitleText: {
    marginTop: 10,
    marginBottom: 15,
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  illiniBlueBackground: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
  menu: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    marginBottom: 40,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  updateContainer: {
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'rgba(232, 74, 39, 0.95)',
  },
  updateTitle: {
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'left',
    color: Colors.white,
  },
  updateDescription: {
    marginTop: 0,
    fontSize: 17,
    fontWeight: '400',
    color: Colors.white,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 0,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  logo: {
    marginVertical: 10,
    marginHorizontal: win.width / 3.9,
    width: 209,
    height: 25,
  },
  busImage: {
    height: 250,
    flex: 1,
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});
