import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Featured from '../screens/featured';
import Artist from '../screens/featured/artist';

const Stack = createStackNavigator();

const FeaturedStack = props => {
  const responseDistance = 500;

  return (
    <Stack.Navigator
      initialRouteName="Featured"
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
      
      {/* Featured Screen */}
      <Stack.Screen
        name="Featured"
        component={Featured}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          gestureResponseDistance: responseDistance,
          title: null,
          headerShown: false,
        }}
      />

      {/* Past Featured Artist Screen */}
      <Stack.Screen
        name="Past Featured Artist"
        component={Artist}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />
      
    </Stack.Navigator>
  )
}