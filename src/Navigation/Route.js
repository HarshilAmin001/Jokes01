// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Jokes, Tab1,Tab2} from '../Screens';
import navigationString from '../Constants/navigationString';
import MainStack from './MainStack';
import Tabroute from './Tabroute';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
       screenOptions={{headerShown: false}}
      >
        {MainStack(Stack)}
      </Stack.Navigator> */}
    <Drawer.Navigator
     screenOptions={{headerShown: false}}
     >
      <Drawer.Screen name={navigationString.TABS} component={Tabroute} />
      <Drawer.Screen name={navigationString.JOKES} component={Jokes} />
    </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default Routes;