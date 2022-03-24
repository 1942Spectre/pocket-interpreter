import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

function PreviewScreen({ navigation }){
    return(
        <View>
            <TouchableOpacity onPress = {() => navigation.navigate("Result")}>
            <Text>Preview Screen</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PreviewScreen;