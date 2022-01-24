//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,
    Image,
    TouchableOpacity, } from 'react-native';
import styles from '../Customdrawer/styles';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



// create a component
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
            <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>

<Image
            source={require('../../../assets/images/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
        
        <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'sans-serif',
              marginBottom: 5,
            }}>
            Super Jokes
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'sans-serif',
                marginRight: 5,
              }}>
              280 Jokes
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>

          </ImageBackground>
          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
        </DrawerContentScrollView>
        
        
    )
}

// define your styles


//make this component available to the app
export default CustomDrawer;
