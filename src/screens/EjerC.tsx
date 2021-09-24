import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const EjerC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>

        </View>
    )
}

export default EjerC

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#28425B",
        justifyContent:"center"

    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6",
        alignSelf:"flex-end"
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
        
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "lightblue",
        alignSelf:"center"
    },

})
