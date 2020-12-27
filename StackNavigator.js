import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "./screens/post";
import HomeScreen from "./screens/login";
import RegistrationScreen from "./screens/register";
import ListScreen from "./screens/list";
import ProfileScreen from "./screens/profile"
import MainScreen from "./screens/main"
import QRcodeScreen from "./screens/qrcode"
import QRMainScreen from "./screens/qrmain"
import QRCodeScannerScreen from "./screens/qrscanner"
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
const PostNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
const PostsListNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
const QRCodeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="QRCodeMain" component={QRMainScreen} />
      <Stack.Screen name="QRCode" component={QRcodeScreen} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, PostNavigator, PostsListNavigator, ProfileNavigator, MainNavigator, QRCodeNavigator };
