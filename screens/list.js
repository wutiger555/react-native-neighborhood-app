import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { firebase } from "../firebase/config";
import "firebase/firestore";
import { Card } from "@paraboly/react-native-card";

export default function postsScreen({ navigation }) {
  const [postList, setPostList] = useState([]);
  const getPosts = () => {
    const array = [];
    const ref = firebase.database().ref("/posts");
    ref.once("value").then((snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        const title = childSnapshot.val().title;
        const content = childSnapshot.val().content;
        const key = childSnapshot.key;
        array.push({
          id: key,
          title: title,
          content: content,
        });

      });
        setPostList(array);
    });
  };

  useEffect(() => {
    getPosts();
  });
  
  return (
    <View style={style.container}>
     <Text style={style.title}>社區公告列表</Text>
      <FlatList
        keyExtractor = {(item) => item.id}
        data = {postList}
        renderItem = {({item}) => (
          <Card
          title={item.title}
          description={item.content}
          iconType="house"
            bottomRightText = {item.id}
        />
        )} 
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 30,
  }
});
