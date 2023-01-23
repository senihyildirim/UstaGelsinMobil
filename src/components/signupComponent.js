import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomTextinput from "./customTextinput";
import CustomButton from "./customButton";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignupComponent = () => {

    const [user , setUser] = React.useState({
        name: '',
        surname: '',
        email:'',
        password: '',
        location:[
            {
                kat: '',
                daire: '',
                bina : '',
                title : '',
                adres: '',
            }
        ]
    })


    const navigation = useNavigation();

    const onSignUp = () => {
        auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
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

    //create user for firebase users collection
    const createUser = (user) => {
        firestore()
        .collection('users')
        .doc(user.email)
        .set({
            name: user.name,
            surname: user.surname,
            email: user.email,
        })
        .then(() => {
            console.log('User added!');
        });
    }

            


    return (
        <View style={styles.container}>
            <CustomTextinput
                title="Ad"
                placeholder="Ad"
                value = {user.name}
                onChangeText = {(text) => setUser({...user, name: text}) }
            />
            <CustomTextinput
                title="Soyad"
                placeholder="Soyad"
                value = {user.surname}
                onChangeText = {(text) => setUser({...user, surname: text}) }
            />
            <CustomTextinput
                title="Email"
                placeholder="Email"
                value = {user.email}
                onChangeText = {(text) => setUser({...user, email: text}) }
            />
            <CustomTextinput
                title="Şifre"
                placeholder="Şifre"
                value = {user.password}
                onChangeText = {(text) => setUser({...user, password: text}) }
                password={true}
            />
            <CustomButton
                onPress={() => 
                    {
                        onSignUp()
                        createUser(user)
                    }
                }
                title="Kayıt Ol"
            />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SignupComponent;