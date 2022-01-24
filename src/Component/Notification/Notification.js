
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, FlatList } from 'react-native';

import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import storage from "@react-native-async-storage/async-storage";
import styles from './styles';
import Deeplink from '../Notification/Deeplink'


//1. import the library
//2. get permission
//3. do push notifications on button click
//4. schedule push notifications

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

export default function Notification() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getPermission = async () => {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Enable push notifications to use the app!');
          await storage.setItem('expopushtoken', "");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem('expopushtoken', token);
      } else {
        alert('Must use physical device for Push Notifications');
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    }

    getPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };


  }, []);



  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  React.useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request.content.data.url &&
      lastNotificationResponse.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      Linking.openURL(lastNotificationResponse.notification.request.content.data.url);
    }
  }, [lastNotificationResponse]);


  // Fetching data from the Api 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  React.useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const onClick = async () => {

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Joke Of the Day: ",
        body: data.setup,
        data: {url:'myapp://Jokes', data: data.delivery},
      },
      trigger: null
    });
  }

  return (
    <SafeAreaView style={styles.container}>

      
  <View style={styles.container}>
  <Text style={{
    marginBottom: 50,
    marginHorizontal: 50,
    fontSize: 20,
    color:'red',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  }} >PUNCHLINE: {notification && JSON.stringify(notification.request.content.data.data)}</Text>
        <TouchableOpacity onPress={onClick}>
          <Text style={{ backgroundColor: '#aa18ea', padding: 10, color: 'white',fontWeight:'bold', borderRadius: 10, width:150, textAlign:'center' }}>Show me a joke</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>

    </SafeAreaView>
  );

}