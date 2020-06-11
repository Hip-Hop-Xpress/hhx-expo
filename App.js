import React, {useState} from 'react';
import BottomNavigator from './routes/bottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

/**
 * Mobile app for the Hip Hop Xpress
 */
export default function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.otf'),
      'Montserrat-Black': require('./assets/fonts/Montserrat/Montserrat-Black.otf'),
      'Karla-Regular': require('./assets/fonts/Karla/Karla-Regular.ttf'),
      'Karla-BoldItalic': require('./assets/fonts/Karla/Karla-BoldItalic.ttf'),
    });
  };
  const [dataLoaded, setDataLoaded] = useState(false);

  // Get fonts before loading app
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  };
  
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
