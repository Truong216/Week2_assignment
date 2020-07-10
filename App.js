import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/3.jpg') },
  { id: 8, imgSource: require('./assets/5.jpg') },
  { id: 9, imgSource: require('./assets/2.jpg') },
  { id: 10, imgSource: require('./assets/1.jpg') },
];
export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
            <Entypo name="grid" size={30} color="black" />
          </View>
          <View style={styles.info}>
            <View style={styles.imgswrapper}>
              <Image
                style={styles.avatar}
                source={require('./assets/avatar.png')}
              />
            </View>  
            <View style={styles.infocontainer}>
              <View style={styles.infowrapper}>
              <Text style={styles.username}>Trương Đình Trường</Text>
              <Text style={styles.userjob}>Developer</Text>
              </View>  
              <View style={styles.buttonwraper}>
                <View style={styles.followsbutton}>
                <Button
                  onPress={()=>{alert('followed')}}
                  title="Follow"
                  color="white"
                />
                </View>
                <TouchableHighlight onPress={()=>{alert('message sended')}}>
                <View style={styles.sendbutton}>
                  <Ionicons name="md-send" size={24} color="white"/>
                </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.follows}>
            <View style={styles.follows_li}>
              <Text style={styles.follow_count}>210</Text>
              <Text style={styles.follow_letter}>photos</Text>
            </View>
            <View style={styles.follows_li}>
              <Text style={styles.follow_count}>15K</Text>
              <Text style={styles.follow_letter}>followers</Text>
            </View>
            <View style={styles.follows_li}>
              <Text style={styles.follow_count}>605</Text>
              <Text style={styles.follow_letter}>following</Text>
            </View>
          </View>
          <ScrollView style={{
            flex: 0.5,
          }}>
          <View style={styles.imgs}>
            <View style={{
              flexDirection: "column",
            }}>
              {imgData.slice(0, centerImgData).map(item =>{
                return <Image source={item.imgSource} style={styles.Image}/>; 
              })}
            </View>  
            <View 
              style={{
                flexDirection: "column",
              }}
            >
              {imgData.slice(centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.image}/>
              })}
              </View> 
          </View>
          </ScrollView>
          <View style={styles.bottomtab}>
            <Foundation name="home" size={30} color="black" />
            <Feather name="plus-circle" size={30} color="black" />
            <Feather name="user" size={30} color="black" />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    },
  header: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
  info: {
    marginTop: 10,
    flex: 0.20,
    flexDirection: "row",
    },
  follows: {
    marginTop: 15,
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    },
  imgs: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    },  
  infocontainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
  },  
  buttonwraper: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  followsbutton: {
    width: 120,
    height: 35,
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 25,
    marginRight: 10,
    justifyContent: "center",
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
  sendbutton: {
    width: 60,
    height: 35,
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 25,
    justifyContent: "center",
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
  imgswrapper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  infowrapper: {
    flex: 0.5,
    justifyContent: "center",
  },
  username: {
    fontWeight: "800",
    fontSize: 18,
    paddingBottom: 5,
  },
  userjob: {
    fontWeight: "100",
    color: "grey",
    fontSize: 16,
    paddingBottom: 20,
  },
  follows_li: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  follow_count: {
    fontSize: 18,
    fontWeight: "800",
  },
  follow_letter: {
    fontWeight: "100",
    color: "grey",
    fontSize: 14,
  },
  imgsdisplay: {
    height: 120,
    width: 120,
  },
  Image: {
    height: 150,
    width: 150,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 20
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 20,
    marginBottom: 20
  },
  bottomtab: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
  }
});
