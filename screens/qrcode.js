import React, { useEffect, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from 'react-native-paper';


const QRcodeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("QRCodeMain")}
      >
        <Image
          style={styles.leftarrow}
          source={{
            uri:
              "https://wpc.stu.edu.tw/wp-content/uploads/sites/31/2019/11/left-arrow.png",
          }}
        ></Image>
        <Text style={styles.lefttext}>返回</Text>
      </TouchableOpacity>
      <TextInput
        label="繳費項目名稱："
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TextInput
        label="繳費金額："
        keyboardType = {'numeric'}
        style={styles.input}
        onChangeText={(text1) => setText1(text1)}
        value={text1}
      />
      <View style={styles.qrview}>
          <Text style={styles.qrtext}>產生之QR Code:</Text>
      <QRCode
        value={text.length > 0 ? text+','+text1 : "none"}
        size={200}
        bgColor="#000000"
        fgColor="#FFFFFF"
      />
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center'
  },

  input: {
    margin: 10,
    borderRadius: 5,
  },
  back: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingTop: 60,
    paddingBottom: 10,
    marginBottom: 50,
    backgroundColor: "#00BFFF",
  },
  lefttext: {
    fontSize: 20,
  },
  leftarrow: {
    width: 20,
    height: 20,
  },
  qrview: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  },
  qrtext:{
      fontSize:20
  }
});
export default QRcodeScreen;
