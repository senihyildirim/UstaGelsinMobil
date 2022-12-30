import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions, FlatList} from 'react-native';;
import { useNavigation } from '@react-navigation/native';
import BottomMenu from '../components/bottomMenu';
import ProfileCardElement from '../components/profileCardElement';
import Header from '../components/header';
import AddAdressButton from '../components/addAdressButton';
import firebase from '@react-native-firebase/app';

const ProfilePage = (props) => {
    const navigation = useNavigation();

    const firestore = firebase.firestore();
    const currentUser = firebase.auth().currentUser;
    const usersRef = firestore.collection('users');

    useEffect(() => {
        usersRef.where("email", "==", currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((documentSnapshot) => {
                setUser(documentSnapshot.data());
            });
        });
    }, []);

            

    const [user, setUser] = useState(
        {
            name: "",
            surname: "",
            email: "",
        }
    );



    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.cardContainer}>
                <ProfileCardElement
                    title="İsim"
                    value={user.name}
                />
                 <ProfileCardElement
                    title="Soyisim"
                    value={user.surname}
                />
                <ProfileCardElement
                    title="Email"
                    value={user.email}
                />
            </View>
            <View style={styles.addAdressButtonStyle}>
            <AddAdressButton />
            </View>
            <BottomMenu
                pageName="Profile"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        alignItems: "center",
        marginBottom: 20,
        top : 100,
    },
    addAdressButtonStyle: {
        alignItems: "center",
        top: Dimensions.get("window").height * 0.5,
    }
});

export default ProfilePage;

