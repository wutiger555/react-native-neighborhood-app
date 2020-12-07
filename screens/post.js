import * as React from "react";
import { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { firebase } from "../firebase/config";

const user = firebase.auth().currentUser;
const getCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}
const submitPost = (title, content) => {
  firebase.database().ref("/posts").push({ 
    title: title, 
    content: content,
    date: getCurrentDate(),
    poster: user.displayName
  });
};

const DetailsScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={style.container}>
      <Text style={style.headline}>發布社區公告</Text>
      <Text style={style.inputDes}>公告標題</Text>
      <TextInput
        style={style.title}
        placeholder="公告標題"
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.inputDes}>公告內容</Text>
      <TextInput
        style={style.content}
        multiline={true}
        onChangeText={(text) => setContent(text)}
        placeholder="公告內容"
      />
      <Button title="送出" onPress={() => submitPost(title, content)} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  headline:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  inputDes:{
    textAlign: 'center',
    fontSize: 20,
    marginLeft:30,
    backgroundColor: 'black',
    width: 300,
    color: 'white',
    marginTop: 10
  },
  title: {
    height: 48,
    width: 300,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  content: {
    height: 400,
    width: 300,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
});
export default DetailsScreen;
