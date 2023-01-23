import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtomIcon from "./buttomIcon";
import { secondary } from "../utils/COLORS";
import { useEffect } from "react";

const BottomMenu = (props) => {
    const navigation = useNavigation();

    const [selected, setSelected] = React.useState(props.pageName);
    return (
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                <ButtomIcon
                    name="home"
                    selected={selected === "Home"}
                    onPress={() => {
                        setSelected("Home");
                        navigation.navigate("Home");
                    }}
                    />
                <ButtomIcon
                    name="shoppingcart"
                    selected={selected === "PastOrders"}
                    onPress={() => {
                        setSelected("PastOrders");
                        navigation.navigate("PastOrders");
                    }}
                    />
                <ButtomIcon
                    name="user"
                    selected={selected === "Profile"}
                    onPress={() => {
                        setSelected("Profile");
                        navigation.navigate("Profile");
                    }}
                    />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.06,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        backgroundColor: secondary,
    },
    insideContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.8,
    },
});

export default BottomMenu;