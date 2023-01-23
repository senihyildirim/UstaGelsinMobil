import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { secondary } from "../utils/COLORS";

const CustomTextinput = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>{props.title}</Text>
            </View>
            <TextInput style={styles.ınputBorder} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} 
             secureTextEntry={props.password}
            />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.65,
    },
    ınputBorder: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.06,
    borderWidth: 1,
    borderColor: secondary, 
    borderRadius: 10,
    },

});

export default CustomTextinput;
