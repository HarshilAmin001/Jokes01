
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import storage from "@react-native-async-storage/async-storage";
import styles from './styles';

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
  const [notification, setNotification] = useState(true);
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

  
  const onClick = async () => {
    
    // try {
    //   const response = await fetch('https://reactnative.dev/movies.json');
    //   const json = await response.json();
    //   setData(json.movies);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Title",
        body: "body",
        data: {url: "https://reactnative.dev/movies.json" },
      },
      trigger: null
    });
  }

  return (
    <SafeAreaView style={styles.container}>
    <View>

    

      <TouchableOpacity onPress={onClick}>
        <Text style={{backgroundColor: 'red', padding: 10, color: 'white'}}>Show me a joke</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );

}