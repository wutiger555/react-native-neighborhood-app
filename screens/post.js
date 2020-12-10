import * as React from "react";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { firebase } from "../firebase/config";

// 點擊鍵盤外面可跳出鍵盤
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + "-" + month + "-" + year; //format: dd-mm-yyyy;
};
const submitPost = (title, content, navigation) => {
  firebase.database().ref("/posts").push({
    title: title,
    content: content,
    date: getCurrentDate(),
    poster: firebase.auth().currentUser.displayName,
  });
  navigation.navigate("List");
};

const DetailsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <DismissKeyboard>
      <View style={style.container}>
        <TouchableOpacity
          style={style.back}
          onPress={() => navigation.navigate("List")}
        >
          <Image
            style={style.leftarrow}
            source={{
              uri:
                "https://wpc.stu.edu.tw/wp-content/uploads/sites/31/2019/11/left-arrow.png",
            }}
          ></Image>
          <Text style={style.lefttext}>返回</Text>
        </TouchableOpacity>
        <View style={style.titleText}>
          <Text style={style.headline}>發布社區公告</Text>
        </View>

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
        <Button
          title="送出"
          onPress={() => submitPost(title, content, navigation)}
        />
      </View>
    </DismissKeyboard>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  back: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginBottom: 2,
  },
  lefttext: {
    fontSize: 20,
  },
  leftarrow: {
    width: 20,
    height: 20,
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFFFFF",
  },
  inputDes: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 30,
    backgroundColor: "black",
    width: 300,
    color: "white",
    marginTop: 10,
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
  titleText: {
    backgroundColor: "#00BFFF",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
});
export default DetailsScreen;
