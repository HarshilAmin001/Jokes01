//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
// create a component
const Jokes = () => {
    return (
        <View style={styles.container}>
            <Text>Jokes</Text>
        </View>
    );
};

//make this component available to the app
export default Jokes;
