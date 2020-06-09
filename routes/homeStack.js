import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../screens/home';
import Update from '../screens/update';
import Courses from '../screens/history/courses';
import Participants from '../screens/history/participantsScreen';
import Participant from '../screens/history/participant';
import ArtistHistories from '../screens/history/artistHistoryScreen';
import ArtistHistory from '../screens/history/artistHistory';
import Variations from '../screens/history/variationsScreen';
import Variation from '../screens/history/variation';

import * as Colors from '../styles/colors';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/
const UpdateStack = props => {
  const responseDistance = 500;

  const nonLandingScreenOptions = {
    gestureDirection: 'horizontal',
    gestureResponseDistance: responseDistance,
    gestureEnabled: true,
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      mode="card"
      gesturesEnabled={true}
      gestureResponseDistance={responseDistance}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: Colors.ILLINI_BLUE,
          height: 58,
        },
      }}
    >

      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          gestureResponseDistance: responseDistance,
          title: null,
          headerShown: false,
        }}
      />

      {/* Update Screens */}
      <Stack.Screen
        name="Update"
        component={Update}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Updates',
        }}
      />

      {/* Courses Screen */}
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Courses',
        }}
      />

      {/* Artist Histories Screen */}
      <Stack.Screen
        name="Artist Histories"
        component={ArtistHistories}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Artist Histories',
        }}
      />

      {/* Artist History Individual Screen */}
      <Stack.Screen
        name="Artist History"
        component={ArtistHistory}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Artist Histories',
        }}
      />

      {/* Participants Screen */}
      <Stack.Screen
        name="Participants"
        component={Participants}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Participants',
        }}
      />

      {/* Participant Individual Screen */}
      <Stack.Screen
        name="Participant"
        component={Participant}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Participants',
        }}
      />

      {/* Variations List Screen */}
      <Stack.Screen
        name="Variations"
        component={Variations}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Variations on the Hip Hop Xpress',
        }}
      />

      {/* Variations Individual Screen */}
      <Stack.Screen
        name="Variation"
        component={Variation}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: 'Variations on the Hip Hop Xpress',
        }}
      />

    </Stack.Navigator>
  );
};

export default UpdateStack;
