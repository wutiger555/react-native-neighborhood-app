import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { firebase } from "../firebase/config";
import "firebase/firestore";
import React, { useState, useEffect } from "react";

export default function ProfileScreen({ navigation }) {
  const user = firebase.auth().currentUser;
  const [community, setCommunity] = useState("");
  const communityGet = firebase
    .firestore()
    .collection("users/")
    .doc(user.uid)
    .onSnapshot((Snapshot) => {
      setCommunity(Snapshot.data().community);
    });
    
  useEffect(() => {
    () => communityGet();
  });
  const logout = async () => {
    try {
        await firebase.auth().signOut();
        navigation.navigate("Login");
    } catch (e) {
        Alert.alert(e)
    }
  

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdWw_Z4nV0_9l-LPVc_38e6IGXn93Q9obPw&usqp=CAU",
            }}
          />
          <Text style={styles.name}>{user.displayName}</Text>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>個人資料</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.buttonContainer}>
            <Text style={styles.count}>電子信箱: {user.email}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.count}>使用者名稱: {user.displayName}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text>社區名稱: {community}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text>UID: {user.uid}</Text>
          </View>
          <TouchableOpacity style={styles.followButton} onPress={()=>logout()}>
            <Text style={styles.followButtonText}>登出</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#00BFFF",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  profileDetail: {
    alignSelf: "center",
    marginTop: 200,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#ffffff",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#00CED1",
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    backgroundColor: "#00BFFF",
  },
  description: {
    fontSize: 20,
    color: "#00CED1",
    marginTop: 10,
    textAlign: "center",
  },
  followButton: {
    marginTop: 10,
    height: 45,
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    backgroundColor: "grey",
  },
  followButtonText: {
    color: "black",
    fontSize: 17,
  },
});
