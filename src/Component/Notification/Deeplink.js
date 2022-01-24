import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import Jokes from "../../Screens/Jokes/Jokes";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const prefix = Linking.createURL("/");

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      Screens: {
        Jokes: "Jokes",
      },
    },
  };
  const url = Linking.useUrl();
  console.log(url);
  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    setData(data);
  }

  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Jokes" component={Jokes} />
     
        
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>
    //     {data ? JSON.stringify(data) : "App not opened from deep link"}
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});