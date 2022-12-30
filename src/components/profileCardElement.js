import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { primary, secondary } from "../utils/COLORS";

const ProfileCardElement = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                <Text>{props.title}</Text>
                </View>
                <View style={styles.dataContainer} >
                <Text>{props.value}</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.07,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 5,
    },
    insideContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get("window").height * 0.07,
        borderRadius: 10,
        backgroundColor: secondary,
    },
    dataContainer: {
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 10,
    }
});

export default ProfileCardElement;