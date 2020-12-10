import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import {
  MainStackNavigator,
  PostsListNavigator,
  ProfileNavigator,
  MainNavigator
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="發布公告"
        component={PostNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="plus" />,
        }}
      /> */}
      <Tab.Screen
        name="主頁"
        component={MainNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" />,
        }}
      />
      <Tab.Screen
        name="公告列表"
        component={PostsListNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="menu" />,
        }}
      />
      <Tab.Screen
        name="個人資料"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="information" />,
        }}
      />
      <Tab.Screen
        name="登入"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="login" />,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
