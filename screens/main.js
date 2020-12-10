import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-carousel-view";
import { firebase } from "../firebase/config";

const MainScreen = ({ navigation }) => {
    // 確認登入 否則跳回login
    useEffect((navigation) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
            //   console.log('user logged')
            }else{
                navigation.navigate("Login")
            }
         });
        });
  return (

      <View style={styles.container}>
          <View style={styles.topbar}>
          <Text style={styles.title}>主頁</Text>
          </View>
        
        <Carousel
          width={375}
          height={300}
          delay={10000}
          indicatorAtBottom={false}
          indicatorSize={20}
          indicatorColor="red"
        >
          <View style={styles.contentContainer}>
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://s.yimg.com/uu/api/res/1.2/q7eDUsABPG2ESuPPBX9OoA--~B/aD0zMTg7dz00NTA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_us/News/Lihpao/17_201307081958081Lhr2.jpg",
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Image
              style={styles.img}
              source={{
                uri: "https://health99.hpa.gov.tw/media/public/75dpi/30721.jpg",
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://live.staticflickr.com/4794/40951045481_52a6fb70ea_c.jpg",
              }}
            />
          </View>
        </Carousel>
      </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 375,
    height: 300,
  },
  topbar:{
    backgroundColor: "#00BFFF",
    marginBottom: 50,
    width: 1000,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color:"#FFFFFF",
  },
  container: {
    flex: .7,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: "#CCC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainScreen;
