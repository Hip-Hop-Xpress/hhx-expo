import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Update from '../screens/update';
import Courses from '../screens/history/courses';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/
const UpdateStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      mode="card"
      gesturesEnabled={true}
      gestureResponseDistance={100}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgba(19, 41, 75, 1.0)',
          height: 55,
        },
      }}>

      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          gestureDirection: 'horizontal-inverted',
          gestureEnabled: true,
          gestureResponseDistance: 100,
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
          gestureResponseDistance: 100,
          gestureEnabled: true,
          headerTitle: null,
        }}
      />

      {/* Courses Screen */}
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: 100,
          gestureEnabled: true,
          headerTitle: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default UpdateStack;
