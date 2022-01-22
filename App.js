//import liraries
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Route';


// create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
