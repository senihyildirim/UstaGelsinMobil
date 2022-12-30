import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, FlatList } from "react-native";
import { secondary } from "../utils/COLORS";



const PriceComponent = (props) => {
    return (
        <Pressable onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.priceGroup}>
            <View style={styles.headerContainer}>
                <Text style={{ color: "white", fontSize: 20 }}>{props.title}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={{ color: "white", fontSize: 17 }}>{props.price}TL</Text>
            </View>
            </View>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
    },
    headerContainer: {
        width: Dimensions.get("window").width * 0.5,
        height: 60,
        backgroundColor:secondary,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    priceContainer: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 70,
        alignItems: "center",
        backgroundColor: secondary,
        justifyContent: "center",
    },
    line: {
        width: Dimensions.get("window").width * 0.9,
        height: 1,
        backgroundColor: "black",
        opacity: 0.5,
        marginTop: 35,
    },
    priceGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 10,
        width: Dimensions.get("window").width * 0.9,
        marginBottom: 20,
    },
});

export default PriceComponent;
