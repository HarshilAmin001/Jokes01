// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Jokes} from '../Screens';
import navigationString from '../Constants/navigationString';
import Tabroute from './Tabroute';
import {Image} from 'react-native';
import imagePath from '../Constants/imagePath';
import Notify from '../Screens/Notify/Notify';



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
      <Drawer.Screen name={navigationString.HOME} component={Tabroute}
      
      options={{
        drawerIcon: ({focused})=>{
          return(
            <Image source={imagePath.HomeIcom} />
          )
        }
      }}
      />
      <Drawer.Screen name={navigationString.JOKES} component={Notify}
      options={{
        drawerIcon: ({focused})=>{
          return(
            <Image source={imagePath.JokeIcon} />
          )
        }
        
      }}
      />
    </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default Routes;