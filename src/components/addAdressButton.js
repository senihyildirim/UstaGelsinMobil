import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { secondary } from "../utils/COLORS";
import { useNavigation } from "@react-navigation/native";



const AddAdressButton = () => {
    const navigation = useNavigation();
    return (
            <Pressable
                style={styles.adressContainer}
                onPress={() => 
                    navigation.navigate("Adress")
                }
            >
                <Text style={styles.adressText}>Adres Ekle</Text>
            </Pressable>
    );
}

const styles = StyleSheet.create({
    adressContainer: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.06,
        backgroundColor: secondary,
        borderRadius: 10,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    adressText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default AddAdressButton;