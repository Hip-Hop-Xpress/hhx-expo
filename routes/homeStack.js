import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Update from '../screens/update';
import Courses from '../screens/history/courses';
import Participants from '../screens/history/participantsScreen';
import Participant from '../screens/history/participant';
import ArtistHistories from '../screens/history/artistHistoryScreen';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/
const UpdateStack = props => {
  const responseDistance = 500;

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
          backgroundColor: 'rgba(19, 41, 75, 1.0)',
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
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />

      {/* Courses Screen */}
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />

      {/* Artist Histories Screen */}
      <Stack.Screen
        name="ArtistHistories"
        component={ArtistHistories}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />

      {/* Participants Screen */}
      <Stack.Screen
        name="Participants"
        component={Participants}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />

      {/* Participant Individual Screen */}
      <Stack.Screen
        name="Participant"
        component={Participant}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />

    </Stack.Navigator>
  );
};

export default UpdateStack;
