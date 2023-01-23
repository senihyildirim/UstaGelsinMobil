import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, Modal, FlatList } from "react-native";
import { secondary } from "../utils/COLORS";
import { useEffect } from "react";
import firebase from '@react-native-firebase/app';
import AdressElement from "./adressElemet";



const AdressCard = () => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedAdress, setSelectedAdress] = React.useState("Adres Seçiniz");
    const [adressList, setAdressList] = React.useState([]);

    const firestore = firebase.firestore();
    const currentUser = firebase.auth().currentUser;
    const usersRef = firestore.collection('users');

    const getAdress = () => {
        usersRef.doc(currentUser.email).collection("Adresses").get().then((querySnapshot) => {
            const adresses = [];
            querySnapshot.forEach((documentSnapshot) => {
                adresses.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            }
            );
            setAdressList(adresses);

        });
    }

    useEffect(() => {
        getAdress();
        adressList 
    }, []);


    
    return (
        <View style={styles.container}>
            <Pressable 
            onPress={() => setModalVisible(true)}
            >
            <View style={styles.adressContainer} >
                <Text>{selectedAdress}</Text>
            </View>
            </Pressable>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Adres Seçiniz</Text>
                        </Pressable>
                        <View style={styles.listStyle} >
                        <FlatList
                        data={adressList}
                        renderItem={({ item }) => (
                            <AdressElement
                            title={item.adressTitle}
                            onPress={() => {
                                setSelectedAdress(item.adressTitle);
                                setModalVisible(!modalVisible);
                            }}
                            />
                            )}
                            />
                            </View>
                        </View>
                        </View>
                        </Modal>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width ,
        height: Dimensions.get("window").height * 0.08,
        backgroundColor: secondary,
    },
    adressContainer: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.06,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "rgba(0,0,0,0.5)"
        },
        modalView: {
        margin: 20,
        backgroundColor: secondary,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
        },
        listStyle: {
            height: Dimensions.get("window").height * 0.2
        },
});

export default AdressCard;

