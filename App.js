import React from 'react';
import Navigator from './routes/homeStack'; // enable this for the stack
import BottomNavigator from './routes/bottomNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
