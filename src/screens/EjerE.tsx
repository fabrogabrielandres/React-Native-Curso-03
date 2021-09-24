import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const EjerE = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>

        </View>
    )
}

export default EjerE

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#28425B",
        flexDirection:'row',
        justifyContent:"space-between"
    },
    cajaMorada: {
        width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6",
    },
    cajaNaranja: {
        width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B",
    },
    cajaAzul: {
        width: 100,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "lightblue"
    },

})
