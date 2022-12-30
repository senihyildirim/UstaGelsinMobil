import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions,Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const PastCallsComponent = (props) => {

    return (
<View>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={styles.image}
              source={{
                uri: props.image,
              }}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>{props.marketName}</Text>
            </View>
            <View style={styles.uploadDateContainer}>
              <Text style={styles.uploadDateText}>
                Tarih : {props.uploadDate}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.dateStyle}>
                <Text style={styles.textStyle}>
                     {props.time}
                </Text>
              </Text>
              <Text>
                <Text style={styles.textStyle}>
                    {props.price} TL
              </Text>
                </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 3,
    top: 0,
  },
  leftContainer: {
    width: Dimensions.get('window').width * 0.28,
    height: Dimensions.get('window').height * 0.16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainContainer: {
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').height * 0.16,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
  },
  titleStyle: {
    fontSize: 20,
    left: 3,
    color: '#000',	
  },
  rightContainer: {
    opacity: 0.8,
  },
  textStyle: {
    fontSize:16,
    left: 1,
    color: '#000',
  },
  infoContainer: {
    width: Dimensions.get('window').width * 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    opacity: 0.8,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.8,
  },
  priceStyle: {
    fontSize: 10,
    left: 5,
    color: '#000',
  },
  titleContainer: {
    top: 5,
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    marginTop: 5,
  },
  deleteContainer: {
    backgroundColor: '#fff',
    elevation: 5,
    padding: 5,
    borderRadius: 6,
    width: 25,
    height: 25,
    left: Dimensions.get('window').width * 0.62,
    top: Dimensions.get('window').height * 0.01,
    position: 'absolute',
  },
  ratioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    color: '#000',
  },
  ratioText: {
    fontSize: 10,
    left: 1,
    color: '#000',
  },
  image: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').height * 0.13,
    backgroundColor: '#277BC0',
    top: 5,
    borderRadius: 10,
  },
  viewText: {
    fontSize: 10,
    marginLeft: 2,
    color: '#000',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 5,
  },
  soldContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.3,
    top: Dimensions.get('window').height * 0.09,
    left: Dimensions.get('window').width * 0.4,
  },
  soldText: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: 5,
    color: '#277BC0',
  },
  soldCountText: {
    fontSize: 14,
    alignSelf: 'flex-end',
    marginRight: 5,
    color: '#277BC0'
  },
  uploadDateText: {
    fontSize: 16,
    fontStyle: 'italic',
    opacity: 0.8,
    left: 1,
    color: 'black',
  },
  uploadDateContainer: {
    top: 8,
    marginVertical: 5,
  },
});


export default PastCallsComponent;


