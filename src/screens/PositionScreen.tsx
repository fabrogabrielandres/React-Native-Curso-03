import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';


const PositionScreen = () => {
    const { height, width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            {/* celeste */}
            <View style={styles.recuadro}>
                {/*blanco */}
                <View style={styles.rectangleR}>
                    {/* violeta*/}
                </View>
                <View style={styles.rectangleY}>
                    {/* amarrillo*/}
                </View>
            </View>
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3acada",
        justifyContent: "center",
        alignItems: "center"
    },
    recuadro: {
        width: "30%",
        height: "30%",
        backgroundColor: "white",
    },
    rectangleR: {
        width: "80%",
        height: "40%",
        backgroundColor: "#6159f0",
        alignSelf: "center",
        marginTop: "12%"
    },
    rectangleY: {
        width: "80%",
        height: "40%",
        backgroundColor: "#ebba49",
        alignSelf: "center",
        position:"absolute",
        bottom:0,
        marginBottom:"12%"
    }
})
