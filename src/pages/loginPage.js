import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import SignupComponent from "../components/signupComponent"
import LoginComponent from "../components/loginComponent"
import { primary, secondary } from "../utils/COLORS";

const LoginPage = () => {

    const tabs = ["Giriş Yap", "Kayıt Ol"];
    const [selectedTab, setSelectedTab] = React.useState(tabs[0]);



    return (
<View style={styles.container}>
<View style={styles.headerContainer}>
    <Image source={require("../assets/logo.png")} style={{width: 400, height: 100, alignSelf: "center", top:40}}/>
</View>
<View style={styles.componentContainer}>
    <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
        {tabs.map((tab, index) => (
            <Text key={index} style={{fontSize:selectedTab === tab ? 20 : 18, color: secondary , fontWeight: selectedTab === tab ? 'bold' : 'normal'}} onPress={() => setSelectedTab(tab)}>{tab}</Text>
        ))}
        </View>
        {selectedTab === "Giriş Yap" ? <LoginComponent/> : <SignupComponent/>}
</View>
<View>
</View>
</View>
    );
    }

    const styles = StyleSheet.create({
        headerContainer: {
            backgroundColor: secondary,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height * 0.5,
            borderBottomEndRadius: 50,
            borderBottomStartRadius: 50,
        },
        container :{
            backgroundColor: primary,
            flex: 1,
        },
        componentContainer: {
            elevation: 10,
            borderRadius: 20,
            width: Dimensions.get("window").width * 0.8,
            alignSelf: "center",
            position: "absolute",
            top: Dimensions.get("window").height * 0.25,
            backgroundColor: "white",
        },
    });

export default LoginPage;