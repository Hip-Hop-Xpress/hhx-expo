import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Update from '../screens/update';
import GlobalStyles from '../styles/global';

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
          backgroundColor: 'rgba(232, 74, 39, 1.0)',
          height: 55,
        },
      }}>
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
    </Stack.Navigator>
  );
};

export default UpdateStack;
