import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const DimencionesScreen = () => {
    const { width, height } = useWindowDimensions()

    return (
        <>
            <View style={styles.container}>
                <View style={{ ...styles.cajaMorada, width: width * 0.75 }}>
                    <Text style={{ fontSize: 35 }}> H.{height} w.{width}</Text>
                </View>
                <View style={{ ...styles.cajaNaranja, width: width * 0.25 }}>
                    <Text style={{ fontSize: 35 }}> H.{height} w.{width}</Text>
                </View>
            </View>
        </>
    )
}

export default DimencionesScreen

const styles = StyleSheet.create({
    cajaMorada: {
        backgroundColor: "purple",

    },
    cajaNaranja: {
        backgroundColor: "orange",

    },
    container: {
        backgroundColor: "blue"
    }

})
