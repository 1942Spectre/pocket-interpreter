import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Navigation } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Recorder from "../components/Recorder";


class MainScreen extends React.Component {

    static navigationOptions = {
        title: 'Pocket Interpreter',
        headerStyle: {
          backgroundColor: '#dcdcdd',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      };


    state = {
        isRecording:false
    }

    setRecording = () => {
        this.setState({isRecording : !this.state.isRecording})
    }
    render(){
        return(
            <View style={styles.Background}>
            <View style={styles.LangBar}>
                <Text style={styles.LangBar_Text}>
                    EN
                </Text>
                <AntDesign name="swap" size={24} color="black"/>
                <Text style={styles.LangBar_Text}>
                    RU
                </Text>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity onPress={() => this.setRecording()}>
                    <Recorder isRecording={this.state.isRecording} />
                </TouchableOpacity>
            </View>
        </View>
           )
    }
}

const styles = StyleSheet.create({
    Background: {
        flexDirection: "column",
        flex:1,
        justifyContent:"space-between",
        backgroundColor:"#dcdcdd"
    },
    Container: {
        marginBottom:120
        },
    LangBar: {
        marginTop:10,
        flexDirection:"row",
        width:"80%",
        alignSelf:"center",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"white",
        height:40,
        borderRadius:20,
    },
    LangBar_Text:{
        color:"#4895ef"
    }
})

export default MainScreen;