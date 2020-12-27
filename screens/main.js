import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel from "react-native-carousel-view";
import { firebase } from "../firebase/config";
import EventCalendar from "react-native-events-calendar";

const events = [
  {
    start: "2020-12-01 01:00:00",
    end: "2020-12-02 01:30:00",
    title: "基泰地景十二月份里民大會",
    summary: "里民大會 請大家記得到場喔！",
  },
  {
    start: "2020-12-02 02:00:00",
    end: "2020-12-03 02:30:00",
    title: "基泰地景十二月份聚餐",
    summary: "川菜聚餐囉！",
  }
];

const MainScreen = ({ navigation }) => {
  // 確認登入 否則跳回login
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if(!user){
      navigation.navigate("Login");
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>主頁</Text>
      </View>
      <View style={styles.carousel}>
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

      <ScrollView style={styles.calendar}>
        <Text style={styles.calendarText}>社區日曆</Text>
        <EventCalendar
          eventTapped={JSON.stringify.bind(this)}
          events={events}
          width={370}
          initDate={"2020-12-01"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  calendarText:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom:10
  },
  img: {
    width: 375,
    height: 300,
  },
  calendar: {
    flex: 1,
  },
  topbar: {
    flex: .3,
    backgroundColor: "#00BFFF",
    width: 400,
  },
  title: {
    paddingTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
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
