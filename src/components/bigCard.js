import React from "react";
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";


const BigCard = (props) => {
    const { title, subtitle, onPress, rate } = props;
    return (
        <View style={styles.container}>
                <Pressable  style={styles.button} onPress={onPress}>
                <View style={styles.imageContainer}>
                <Image source={{uri:props.image}} style={styles.imageStyle} />
                </View>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <View style={styles.propContainer} >
                <View style={styles.starContainer}>
                <AntDesign name="star" size={20} color="orange" />
                <Text style={styles.rate}>{rate}</Text>
                </View>
                <Text style={styles.distance}>{props.distance} KM</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.9,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderRadius: 10,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    imageContainer: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        },
    button: {
        top: 0,
        borderRadius: 10,
    },
    titleContainer: {
        width: Dimensions.get("window").width * 0.9,
        backgroundColor: "white",
    },
    propContainer: {
        width: Dimensions.get("window").width * 0.9,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    subtitle: {
        fontSize: 15,
        marginHorizontal: 10,
    },
    rate: {
        fontSize: 15,
        marginHorizontal: 10,
        
    },
    distance: {
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
});

export default BigCard;
