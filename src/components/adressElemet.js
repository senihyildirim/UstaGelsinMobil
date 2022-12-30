import  React from  "react" ;
import  {  StyleSheet,  Text,  View,  Dimensions,  TouchableOpacity,  TextInput,  ScrollView,  Image,  Alert  }  from  "react-native" ;
import  {  primary,  secondary,  tertiary  }  from  "../utils/COLORS" ;


    
const  AdressElement = (props) => {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress} >
                <View style={styles.adressContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        );
        }

const  styles = StyleSheet.create({
        container: {
            width: '20%',
            height: '20%',
            marginVertical: 10,
        },
        title: {
            fontSize: 20,
            fontWeight:  "bold" ,
            color: secondary,
        },
        adressContainer: {
            width: Dimensions.get( "window" ).width * 0.4,
            height: Dimensions.get( "window" ).height * 0.06,
            backgroundColor: primary,
            borderRadius: 10,
            alignItems:  "center" ,
            justifyContent:  "center" ,
        },
    });

export default AdressElement;
