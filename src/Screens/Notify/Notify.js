//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Notification from '../../Component/Notification/Notification';
import styles from '../Jokes/styles';
// create a component
const Notify = () => {
    return (
        <View style={styles.container}>
            <Notification />
        </View>
    );
};

// define your styles
//make this component available to the app
export default Notify;
