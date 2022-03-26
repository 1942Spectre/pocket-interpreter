import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {navigate} from "../navigationRef";

function sendTextToTranslate(text){
    console.log(text)
    console.log("Sent to translate")
    // TEXT WILL BE SENT TO TRANSLATE API HERE
    // RESPONSE WILL BE SAVED INTO THE VARIABLE BELOW AND WILL BE SENT TO THE RESULT SCREEN
    let translation = "Translated Text"
    navigate("Result" , translated_text = translation)
    return
}

function PreviewScreen({ navigation }) {
    [record,SetRecord] = useState(navigation.state.params.record)
    console.log(record)
    return (
        <>
            <View style={styles.container}>

                <View style={styles.textbox}>
                    <Text style={styles.textboxHeader}>Is that correct?</Text>
                    <TextInput onChangeText={(text) => SetRecord(text)} style= {styles.textboxParagraph}>{record}</TextInput>
                </View>

                <TouchableOpacity onPress={() => sendTextToTranslate(record)}>
                    <View style={styles.acceptbox}>
                        <AntDesign name="check" size={100} color="white" />
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({


    acceptbox: {
        backgroundColor: "white",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#4895ef",
        margin: "5%"


    },
    textbox: {
        backgroundColor: "#dcdcdd",
        borderColor:"#4895ef",
        borderWidth:1,
        borderRadius:30,
        padding:30,
        margin: "5%",
        height: "60%",

    },
    textboxHeader:{
        fontSize:24,
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    },
    textboxParagraph:{
        marginTop:16,
        fontSize:16,
        color:"black",
    },
    container: {
        display: "flex",
        margin: 0,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        height: "100%",
    }
})

export default PreviewScreen;