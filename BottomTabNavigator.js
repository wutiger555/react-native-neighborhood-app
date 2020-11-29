import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, PostNavigator, PostsListNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="發布公告" component={PostNavigator} />
      <Tab.Screen name="公告列表" component={PostsListNavigator} />
      <Tab.Screen
        name="登入"
        component={MainStackNavigator}
        // options={{
        //   tabBarVisible: false,
        // }}
      />
     
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
