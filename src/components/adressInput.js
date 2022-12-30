import React from "react";
import { StyleSheet, Text, View, Image, Dimensions,TextInput } from "react-native";
import { secondary } from "../utils/COLORS";


const AdressInput = (props) => {
    return (
        <View 
         style={[styles.container, props.style]}
        >
            <TextInput placeholder={props.placeholder} 
             value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: Dimensions.get("window").height * 0.07,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 5,
    },
});

export default AdressInput;