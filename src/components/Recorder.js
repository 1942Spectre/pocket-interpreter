import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Recorder(props) {
    return (
        <View style={styles.Recorder}>
            {props.isRecording ? <FontAwesome name="microphone-slash" size={140} color="#4895ef" /> : <FontAwesome name="microphone" size={140} color="#4895ef" />}
        </View>
    )
}

const styles = StyleSheet.create({
    Recorder: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 100,
        paddingHorizontal: 110,
        borderRadius: 1500,
        backgroundColor: "#fff",
        shadowColor: "#495057",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        borderWidth: 1,
        borderColor:"#4895ef"
    }
})

export default Recorder;