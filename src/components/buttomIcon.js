import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { primary, secondary } from "../utils/COLORS";

const ButtomIcon = (props) => {
    // if seleced is true, then the button is selected
    const { selected } = props;

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, selected && styles.selected
                ]}
                onPress={props.onPress}
            >
                <AntDesign
                    name={props.name}
                    size={30}
                    color={selected ? secondary : primary }
                />
            </Pressable>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
        },
        button: {
            width: Dimensions.get("window").width * 0.1,
            height: Dimensions.get("window").height * 0.06,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        selected : {
            backgroundColor: primary,
            elevation : 10,
            width: 50,
            height: 50,
            borderRadius: 100,
            top : -20,
        },
    });

export default ButtomIcon;