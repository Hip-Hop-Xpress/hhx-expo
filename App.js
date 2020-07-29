import React, {useState, useEffect, useRef} from 'react';
import BottomNavigator from './routes/bottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as Notifications from 'expo-notifications';
import registerForPushNotificationsAsync from './api/registerForPushNotificationsAsync';

/**
 * Mobile app for the Hip Hop Xpress
 */
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    console.log(expoPushToken);

    // Listener for notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    }

  }, []);

  const fetchFonts = () => {
    return Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.otf'),
      'Montserrat-Black': require('./assets/fonts/Montserrat/Montserrat-Black.otf'),
      'Karla-Regular': require('./assets/fonts/Karla/Karla-Regular.ttf'),
      'Karla-BoldItalic': require('./assets/fonts/Karla/Karla-BoldItalic.ttf'),
    });
  };

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
