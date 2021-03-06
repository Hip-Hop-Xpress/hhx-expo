import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Updates from '../screens/updates';
import Update from '../screens/update';
import * as Colors from '../styles/colors';

const Stack = createStackNavigator();

const UpdateStack = props => {
  const responseDistance = 500;

  return (
    <Stack.Navigator
      initialRouteName="Voting"
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
      
      {/* TODO: CHANGE NAME OF VOTING TO UPDATES */}
      {/* Updates Screen */}
      <Stack.Screen
        name="Voting"
        component={Updates}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          gestureResponseDistance: responseDistance,
          title: null,
          headerShown: false,
        }}
      />

      {/* Update Screen */}
      <Stack.Screen
        name="Update"
        component={Update}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
        }}
      />
      
    </Stack.Navigator>
  )
}

export default UpdateStack;