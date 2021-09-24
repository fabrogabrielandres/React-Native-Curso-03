import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const EjerF = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>

        </View>
    )
}

export default EjerF

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#28425B",
    },
    cajaMorada: {
        flex:2.5,
        // width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6",
    },
    cajaNaranja: {
        flex:2.5,
        // width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
    },
    cajaAzul: {
        flex:5.0,
        // width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "lightblue"
    },

})
