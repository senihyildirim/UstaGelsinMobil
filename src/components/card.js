import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, Image } from "react-native";

const Card = (props) => {
    const { title, subtitle, onPress } = props;
    return (
        <View style={styles.container}>
            <Pressable  style={styles.button} onPress={onPress}>
                <Image source={{uri: props.image}} style={styles.iconStyle} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get("window").height * 0.1,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        color: "grey",
    },
    iconStyle: {
        width: 30,
        height: 30,
        borderRadius: 100,
        top : -10,
    },
});

export default Card;