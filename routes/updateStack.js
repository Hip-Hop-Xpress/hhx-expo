import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Update from '../screens/update';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/
const UpdateStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'tomato',
          height: 40,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          gestureDirection: 'horizontal-inverted',
          gestureEnabled: true,
          title: null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Update"
        component={Update}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          headerTitle: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default UpdateStack;
