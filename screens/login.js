import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/loginStyle";
import { firebase } from "../firebase/config";
import "firebase/firestore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Register");
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate("Details", { user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        Alert.alert(
          "錯誤",
          "信箱或密碼輸入錯誤 ",
          [
            {
              text: "返回",
            },
          ],
          { cancelable: false }
        );
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login-bg.jpg")}
        style={styles.image}
      >
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <Image
            style={styles.logo}
            source={require("../assets/login-icon.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="信箱"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="密碼"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>登入</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              還沒有帳號嗎？{" "}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                點此註冊
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
}
