import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import BottomMenu from "../components/bottomMenu";
import Header from "../components/header";
import PastCallsComponent from "../components/pastCallsComponent";
import  firestore from "@react-native-firebase/firestore";
import CustomButton from "../components/customButton";


const PastOrdersPage = () => {

const [markets, setMarkets] = React.useState([]);

const fetchMarkets = async () => {
    const marketsCollection = await firestore().collection("markets").get();
};

React.useEffect(() => {
    fetchMarkets();
}, []);


    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.ordersContainer}>
            <PastCallsComponent
                image= "https://www.deccanherald.com/sites/dh/files/articleimages/2021/07/25/appliances-istock-1012773-1627232916.jpg"
                marketName="Akınlar Beyaz Eşya"
                uploadDate="12.12.2022"
                time="12:00"
                price="1000"
                />

             <PastCallsComponent
                image= "https://www.build-review.com/wp-content/uploads/2020/12/renovation.jpg"
                marketName="Sarman Tadilat"
                uploadDate="12.12.2022"
                time="13:00"
                price="2000"
                />
                </View>
            <BottomMenu
                pageName="PastOrders"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    ordersContainer: {
        top : 50,
        width: Dimensions.get("window").width * 0.98,
        height: Dimensions.get("window").height * 0.7,
        borderRadius: 10,
    },
});

export default PastOrdersPage;
