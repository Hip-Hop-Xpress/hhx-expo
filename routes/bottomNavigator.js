import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import Projects from '../screens/projects';
import Voting from '../screens/voting';
import FeaturedStack from './featuredStack';
import Map from '../screens/map';
import globalStyles from '../styles/global';

const Tab = createMaterialBottomTabNavigator();

function AppTabs() {
  const iconSize = 24;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E84A27"
      inactiveColor="#FFCC96"
      labeled={true}
      barStyle={[styles.navigator, globalStyles.illiniBlue]}>

      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={iconSize} />
          ),
        }}
      />

      {/* Projects Screen */}
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="wrench"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />

      {/* Voting Screen */}
      <Tab.Screen
        name="Voting"
        component={Voting}
        options={{
          tabBarLabel: 'Voting',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="check" color={color} size={iconSize} />
          ),
        }}
      />    

      {/* Featured Screen */}
      <Tab.Screen
        name="Featured"
        component={FeaturedStack}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="fire" color={color} size={iconSize} />
          ),
        }}
      />

      {/* Map Screen */}
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    fontFamily: 'Montserrat-Black',
    paddingBottom: 0,
    height: 52,
  },
});

export default AppTabs;
