import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { secondary } from "../utils/COLORS";


const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 200, height: 40, marginVertical: 5
                 }}
                source={require("../assets/logo.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        backgroundColor: secondary,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
    }
});

export default Header;

