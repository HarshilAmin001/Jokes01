// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Tab1,Tab2} from '../Screens';
import navigationString from '../Constants/navigationString';

const Tab = createBottomTabNavigator();


function Tabroute() {
  return (
      <Tab.Navigator initialRouteName={navigationString.TAB1}
      
      >
        <Tab.Screen name={navigationString.TAB1} component={Tab1} />
        <Tab.Screen name={navigationString.TAB2} component={Tab2} />
      </Tab.Navigator>
  );
}

export default Tabroute;