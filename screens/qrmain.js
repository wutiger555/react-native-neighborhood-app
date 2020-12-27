import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";

export default class Craigslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          id: 1,
          name: "一月管理費",
          image: "https://img.icons8.com/clouds/100/000000/groups.png",
          count: 124.711,
        },
        {
          id: 2,
          name: "二月管理費",
          image: "https://img.icons8.com/color/100/000000/real-estate.png",
          count: 234.722,
        },
        {
          id: 3,
          name: "三月管理費",
          image:
            "https://img.icons8.com/color/100/000000/find-matching-job.png",
          count: 324.723,
        },
        {
          id: 4,
          name: "四月管理費",
          image: "https://img.icons8.com/clouds/100/000000/employee-card.png",
          count: 154.573,
        },
      ],
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.titleText}>
          <Text style={styles.title}>管理費列表</Text>
        </View>
        <TouchableOpacity style={styles.headerCard} onPress={()=> navigate("QRCode")}>
          <Text style={styles.headerText}>產生繳費條碼</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={styles.card}
              >
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  {/* <Text style={styles.count}>{item.count}</Text> */}
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => navigate("QRCodeScanner")}
                  >
                    <Text style={styles.followButtonText}>繳費</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebf0f7",
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7",
  },
  headerCard: {
    alignItems: 'center',
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "blue",
    padding: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#3399ff",
    fontWeight: "bold",
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#6666ff",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "black",
    fontSize: 12,
  },
  titleText: {
    backgroundColor: "#00BFFF",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFFFFF",
    paddingTop: 60,
  },
});
