import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home';
import Projects from '../screens/projects';

const Tab = createMaterialBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E84A27"
      inactiveColor="#FFCC96"
      barStyle={{backgroundColor: '#13294B'}}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
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
            <MaterialCommunityIcons name="wrench" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;
