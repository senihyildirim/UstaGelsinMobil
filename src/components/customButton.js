import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { primary, secondary } from "../utils/COLORS";

const CustomButton = (props) => {
    return (
        <View style={styles.container} >
            <Pressable style={[styles.button, props.style]}
            onPress={props.onPress}
            >
                <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
            </Pressable>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
        },
        button: {
            backgroundColor: secondary,
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").height * 0.06,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
        },
    });

export default CustomButton;