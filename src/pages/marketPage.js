import React, { useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import { primary, secondary } from "../utils/COLORS";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import PriceComponent from "../components/priceComponent";
import { firebase } from "@react-native-firebase/auth";
import AdressElement from "../components/adressElemet";

const MarketPage = ({route}) => {
    const {market} = route.params;
    const {selectedCategory} = route.params;
    const [services , setServices] = React.useState([])
    const [modalVisible, setModalVisible] = React.useState(false);

    const [shop, setShop] = React.useState([]);

    useEffect(() => {
        fetchServices();
        setShop(firestore().collection('categories').doc(selectedCategory).collection("markets"));
    }, []);

    const fetchServices = async () => {
        const list = [];
        await firestore()
        .collection('categories').doc(selectedCategory).collection("markets").doc(market.key).collection("services").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((documentSnapshot) => {
                    list.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
            });
        setServices(list);
    };

    const giveOrder = async () => {
        const user = firebase.auth().currentUser;
        const userRef = firestore().collection('users').doc(user.email);
        const shopRef = shop.doc(market.key);
        const orderRef = shopRef.collection('orders').doc();
        const batch = firestore().batch();
        batch.set(orderRef, {
            user: userRef,
            shop: shopRef,
            status: 'pending',
            createdAt: firestore.FieldValue.serverTimestamp(),
        });
        batch.update(userRef, {
            orders: firestore.FieldValue.arrayUnion(orderRef),
        });
        batch.update(shopRef, {
            orders: firestore.FieldValue.arrayUnion(orderRef),
        });
        await batch.commit();
        setModalVisible(false);
        console.warn('Usta çağırıldı');
    };




    return (
        <View style={styles.container}>
            <Header/>
            <Image source={{uri:market.image}} style={styles.headerImageStyle} />
            <Text style={styles.headerText}>{market.title}</Text>
            <View>
                <View style={styles.priceHeader}>
                    <Text style={styles.priceHeaderText}> Hizmet Bedeli {market.cost} TL</Text>
                </View>
                <View style={styles.prices}>    
                <FlatList
                data={services}             
                renderItem={({ item }) => (
                    <PriceComponent
                        title={item.title}
                        price={item.price}
                    />
                )}
                />
                </View>
                    <View style={styles.callButton}>
                        <Pressable 
                        onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.callText}>USTAYI ÇAĞIR</Text>
                        </Pressable>
                    </View>
            </View> 
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
                        <View>
                            <Text>Almak İstediğiniz Hizmeti Seçin</Text>
                        </View>
                        <View style={styles.listStyle}>
                        <FlatList
                            data={services}
                            renderItem={({ item }) => (
                                <AdressElement
                                title={item.title}
                                onPress={() => 
                                    giveOrder()}
                                />
                                )}
                                />
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Vazgeç</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    headerImageStyle: {
        top: 50,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.3,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: secondary,
        width: Dimensions.get("window").width* 0.7,
        height: Dimensions.get("window").height * 0.06,
        borderTopRightRadius: 20,
        top: 4,
    },
    priceHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        backgroundColor: secondary,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.06,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    priceHeaderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    prices: {
        top: 10,
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height * 0.45,
    },
    callButton: {
        backgroundColor: primary,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.06,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        left: 20,
        top: 20,
        elevation: 10,
    },
    callText: {
        fontWeight: "bold",
        fontSize: 20,
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
            height: Dimensions.get("window").height * 0.3,
        },
});

export default MarketPage;
