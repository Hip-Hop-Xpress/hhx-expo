import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header';
import ArtistBody from '../components/featuredArtistBody';
import FeaturedArtistsList from '../components/featuredArtistsList';
import strings from '../assets/strings';

// Styles
import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';

const Featured = ({navigation}) => {
  // Artist on featured page must be the "current" artist, as signified by .current member
  const currentArtist = strings.featured.artistList.filter(artist => artist.current)[0];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.illiniBlue]}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <ArtistBody
            name={currentArtist.artistName}
            date={currentArtist.date}
            title={currentArtist.bioTitle}
            bio={currentArtist.bioBody}
            socialMedia={currentArtist.socialMedia}
          />

          {/* Past artists */}
          <View style={featuredStyles.pastArtistsBody}>
              <Text style={featuredStyles.pastArtistsTitle}>{strings.featured.pastArtists}</Text>
              <View style={featuredStyles.artistsContainer}>
                <FeaturedArtistsList navigation={navigation}/>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Featured;
