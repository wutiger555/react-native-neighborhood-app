import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
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
        const date = childSnapshot.val().date;
        const poster = childSnapshot.val().poster;
        const key = childSnapshot.key;
        array.push({
          id: key,
          title: title,
          content: content,
          datetime: date,
          poster: poster
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
      <View style={style.titleText}>
      <Text style={style.title}>社區公告列表</Text>
      </View>
      
      <View style={style.topic}>
        <TouchableOpacity style={style.plus} onPress={()=>navigation.navigate("Post")}>
        <Image
            style={style.addImg}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Add_document_icon_%28the_Noun_Project_27896%29.svg/1024px-Add_document_icon_%28the_Noun_Project_27896%29.svg.png",
            }}
          />
          <Text>發布公告</Text>
        </TouchableOpacity>
        
        
      </View>
     
      <FlatList
      style={style.flatList}
        nestedScrollEnabled
        keyExtractor = {(item) => item.id}
        data = {postList}
        renderItem = {({item}) => (
          <Card
          styles={{ width: 200 }}
          title={item.title}
          description={item.content}
          iconType="house"
          topRightText= {"發布者："+item.poster}
          bottomRightText = {"發布日期："+item.datetime}
        />
          
        )} 
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topic:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    width:70,
    padding:1,
    marginLeft:20,
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color:"#FFFFFF",
    paddingTop: 60,
  },
  addImg: {
    width: 40,
    height: 40,
  },
  flatList:{
    paddingLeft:10,
  },
  titleText:{
    backgroundColor: "#00BFFF",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom:10
  }
});
