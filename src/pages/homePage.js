import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomMenu from "../components/bottomMenu"
import Card from "../components/card";
import Header from "../components/header";
import { primary } from "../utils/COLORS";
import AdressCard from "../components/adressCard";
import BigCard from "../components/bigCard";
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";



const HomePage = () => {
    const navigation = useNavigation();
    const [markets , setMarkets] = React.useState([])
    const [categories , setCategories] = React.useState([])
    const [selectedCategory , setSelectedCategory] = React.useState(null)


    const fetchCategories = async () => {
        try {
            const list = [];
            await firestore()
            .collection('categories')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    list.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
            });
            setCategories(list);
        } catch (e) {
            console.log(e);
        }
    };
    
    const fetchMarkets = async () => {
        try {
            const list = [];
            await firestore()
            .collection('categories')
            .doc(selectedCategory.key)
            .collection('markets')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    list.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
            });
            setMarkets(list);
        } catch (e) {
            console.log(e);
        }
    };



    React.useEffect(() => {
        fetchCategories();
        fetchMarkets();
    }, [ selectedCategory ]);
    

    return (
        <View style={styles.container}>
            <Header />
            <AdressCard />
            <View style={styles.cardContainer} >
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <Card
                    title={item.title}
                    image={item.image}
                    subtitle={item.subtitle}
                    onPress={() => 
                        setSelectedCategory(item) && console.log(selectedCategory)
                    }
                    />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                    </View>
            <View style={styles.bigCardContainer}>
            <FlatList
                data={markets}
                renderItem={({ item }) => (
                    <BigCard
                    title={item.title}
                    image={item.image}
                    subtitle={item.subtitle}
                    rate = {item.rate}
                    distance = {item.distance}
                    onPress={() => 
                         navigation.navigate("Market", {
                            market: item, 
                            selectedCategory: selectedCategory.key

                    })
                }
                    />
                    )}
                    keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                />
                </View>
                <View style ={styles.bottomMenu}>
           <BottomMenu
                pageName="Home"
                />
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    bigCardContainer: {
        alignItems: "center",
        height: Dimensions.get("window").height * 0.63,
        backgroundColor: primary,
    },
    cardContainer: {
        marginVertical: 20,
    },
    bottomMenu: {
        position: "absolute",
        bottom: 0,
    }
});

export default HomePage;

