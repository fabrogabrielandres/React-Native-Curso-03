import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const EjerA = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangleBlue}></View>
            <View style={styles.rectangleOrange}></View>
            <View style={styles.rectangleLBlue}></View>
        </View>
    )
}

export default EjerA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        flexDirection: "column",
        width: "20%",
        justifyContent: 'center',
        alignItems: "center"
    },
    rectangleBlue: {
        backgroundColor: "blue",
        height: 70,
        width: 70,
        borderWidth: 10,
        borderColor:"white"
    },
    rectangleOrange: {
        flex:1,
        alignSelf: "center",
        backgroundColor: "orange",
        width: 70,
        borderWidth: 10,
        borderColor:"white"

    },
    rectangleLBlue: {
        backgroundColor: "lightblue",
        height: 70,
        width: 70,
        borderWidth: 10,
        borderColor:"white"

    },


})
