import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from 'expo-linking';
import navigationString from "../../Constants/navigationString";
import { Jokes } from "../../Screens";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationString.JOKES} component={Jokes} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    Jokes: "j",
  },
};

const prefix = Linking.createURL('Myjokes://app');
const universal = Linking.createURL('https://app.example.com');

export default function Deeplink() {
  return (
    <NavigationContainer
      linking={{
        prefixes: [prefix],
        config
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}