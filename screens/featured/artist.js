import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import ArtistBody from '../../components/artistBodyContent';

import globalStyles from '../../styles/global';
import featuredStyles from '../../styles/featuredStyles';

const Artist = props => {
  const {name} = props.route.params;
  const {date} = props.route.params;
  const {title} = props.route.params;
  const {bio} = props.route.params;
  const {socialMedia} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={featuredStyles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <ArtistBody
            name={name}
            date={date}
            title={title}
            bio={bio}
            socialMedia={socialMedia}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Artist;
