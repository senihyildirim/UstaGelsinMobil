import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { primary, secondary } from "../utils/COLORS";
import CustomTextinput from "./customTextinput";
import CustomButton from "./customButton";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';

const LoginComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [login , setLogin] = React.useState(false)



    const loginTrue = () => {
        if(login){
            navigation.navigate("Home")
        }
    }

 

    const onLogin = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            setLogin(true)
            loginTrue()
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
    }

    return (
        <View style={styles.container}>
            <CustomTextinput 
            title = "Email"
            placeholder = "Email"
            value = {email}
            onChangeText = {(text) => setEmail(text)}
            />
            <CustomTextinput 
            title = "Şifre"
            placeholder = "Şifre"
            value = {password}
            onChangeText = {(text) => setPassword(text)}
            password={true}
            />
        <View style={styles.buttonContainer}>
        <CustomButton 
        onPress={() => 
            onLogin()
        }
        title="Giriş Yap"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Pressable style={{marginBottom:10 }}>
        <Text style={{color: secondary, fontSize: 14, fontWeight: "normal", marginTop: 10}}>Şifremi Unuttum</Text>
        </Pressable>
        </View>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            marginVertical: 20,
        },
        buttonContainer: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
        },
    });

export default LoginComponent;