// In App.js in a new project

import * as React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Tab1,Tab2} from '../Screens';
import navigationString from '../Constants/navigationString';
import imagePath from '../Constants/imagePath';

const Tab = createBottomTabNavigator();


function Tabroute() {
  return (
      <Tab.Navigator initialRouteName={navigationString.TAB1}
      
      >
        <Tab.Screen name={navigationString.TAB1} component={Tab1} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <Image source={imagePath.HomeIcom} />
            )
          }
        }}

        />
        <Tab.Screen name={navigationString.TAB2} component={Tab2} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <Image source={imagePath.ProfileIcon} />
            )
          }
        }}

        />
      </Tab.Navigator>
  );
}

export default Tabroute;