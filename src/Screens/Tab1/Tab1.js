//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

// create a component
const Tab1 = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome To Tab1 Home screen </Text>
        </View>
    );
};

//make this component available to the app
export default Tab1;
