import React from "react";
import { StyleSheet, Text, View, Image, Dimensions,PermissionsAndroid  } from "react-native";
import { primary, secondary } from "../utils/COLORS";
import * as geolib from 'geolib';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import AdressInput from "../components/adressInput";
import CustomButton from "../components/customButton";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const AdressPage = () => {

    const navigation = useNavigation();
    //take permission for location
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This App needs access to your location ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
            } else {
                console.log("Location permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [title , setTitle] = React.useState(null);
    const [adress , setAdress] = React.useState(null);
    const [buildingNo , setBuildingNo] = React.useState(null);
    const [floor , setFloor] = React.useState(null);
    const [flatNo , setFlatNo] = React.useState(null);

    const [region, setRegion] = React.useState({
        latitude: 39.8973017,
        longitude: 32.81818,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const currentUser = firebase.auth().currentUser;

    const saveAdress = () => {
        firestore()
        .collection('users')
        .doc(currentUser.email)
        .collection('Adresses')
        .add({
            adressTitle: title,
            adress: adress,
            buildingNo: buildingNo,
            floor:  floor,
            flatNo: flatNo,
            latitude: region.latitude,
            longitude: region.longitude,
        })
        .then(() => {
             console.log('Adress Added!')  
        })
        .finally(() => {
            navigation.navigate('Profile');
        })
    }


    React.useEffect(() => {
        requestLocationPermission();
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                setLocation(position);
                setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                customMapStyle={styles.map}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />
                <AdressInput 
                    placeholder="Adres Başlığı"
                    style = {styles.adressTitle}
                    value={title}
                    onChangeText={setTitle}
                        />
            <View style={styles.doubleInput} >

                <AdressInput 
                     placeholder="Bina No"
                    value={buildingNo}
                    onChangeText={setBuildingNo}
                         />
                <AdressInput
                        placeholder="Kat"
                        value={floor}
                        onChangeText={setFloor}
                        />
                <AdressInput
                     placeholder="Daire No"
                    value={flatNo}
                    onChangeText={setFlatNo}
                        />
            </View>

    <AdressInput
        placeholder="Adres"
        style = {styles.adressContainer}
    />
    <CustomButton
        title="Kaydet"
        style={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() =>saveAdress()}
    />
        </View>
    );
}




const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height* 0.4,
    },
    container: {
        flex: 1,
        backgroundColor: secondary,
    },
    doubleInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.9,
        alignSelf: "center",
    },
    adressTitle : {
        marginTop: 20,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.07,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    adressContainer: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.2,
        borderRadius: 10,
        alignSelf: "center",
    },
    buttonStyle: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.07,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: 'white',
    },
    buttonTextStyle: {
        color: 'black',
        opacity: 0.5,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default AdressPage;