import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import Carousel from "react-native-carousel-view";
import { firebase } from "../firebase/config";
import EventCalendar from "react-native-events-calendar";
import IconBadge from "react-native-icon-badge";

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
  },
];

const MainScreen = ({ navigation }) => {
  // 確認登入 否則跳回login
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      navigation.navigate("Login");
    }
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [notfiList, setNotfiList] = useState([
    {
      id: 1,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      name: "張管理員",
      comment: "有您的掛號信 請至櫃檯查收.",
      time: "Mon Dec 27, 9:58 am"
    },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      name: "新竹貨運",
      comment: "您的包裹已寄放在櫃台.",
      time: "Mon Dec 27, 5:00 am"
    },
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
      name: "Foodpanda",
      comment: "您的外送訂單已送達櫃檯.",
      time: "Mon Dec 28, 12:00 am"
    },
  ]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("已關閉");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 25, fontWeight: "bold",}}>
              通知
            </Text>
            <FlatList
              style={styles.root}
              data={notfiList}
              extraData={(item) => item.id}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={(item) => {
                const Notification = item.item;
                return (
                  <View style={{}}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        style={styles.image}
                        source={{ uri: Notification.image }}
                      />
                    </TouchableOpacity>
                    <View style={styles.content}>
                      <View style={styles.contentHeader}>
                        <Text style={styles.name}>{Notification.name}</Text>
                        <Text style={styles.time}>{Notification.time}</Text>
                      </View>
                      <Text rkType="primary3 mediumLine">
                        {Notification.comment}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 20}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>關閉</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.topbar}>
        <Text style={{ flex: 1 }}></Text>
        <Text style={styles.title}>主頁</Text>
        <TouchableOpacity
          style={styles.not}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconBadge
              MainElement={
                <Image
                  source={require("../assets/notification-flat.png")}
                  style={{
                    width: 50,
                    height: 50,
                    margin: 6,
                  }}
                />
              }
              BadgeElement={<Text style={{ color: "white" }}>{notfiList.length}</Text>}
              IconBadgeStyle={{
                width: 30,
                height: 30,
                backgroundColor: "#7F00FF",
              }}
              // Hidden={this.state.BadgeCount == 0}
            />
          </View>
        </TouchableOpacity>
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
  calendarText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
  img: {
    width: 375,
    height: 300,
  },
  calendar: {
    flex: 1,
  },
  topbar: {
    flex: 0.35,
    backgroundColor: "#00BFFF",
    width: 400,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    marginTop: 65,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFFFFF",
  },
  not: {
    flex: 1,
    marginTop: 50,
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
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 150,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  root: {
    backgroundColor: "white",
    margin: 1,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator: {
    height: 1,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#CCCCCC",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

});

export default MainScreen;
