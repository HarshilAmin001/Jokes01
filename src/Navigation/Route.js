// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationString from '../Constants/navigationString';
import Tabroute from './Tabroute';
import Notify from '../Screens/Notify/Notify';
import CustomDrawer from '../Component/Customdrawer/CustomDrawer';


import Ionicons from 'react-native-vector-icons/Ionicons';


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
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'sans-serif',
          fontSize: 15,
        },
      }}>
       <Drawer.Screen
        name={navigationString.HOME}
        component={Tabroute}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name={navigationString.JOKES}
        component={Notify} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default Routes;