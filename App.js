import React from 'react';
// import Navigator from './routes/homeStack'; // this is for the stack
import BottomNavigator from './routes/bottomNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
