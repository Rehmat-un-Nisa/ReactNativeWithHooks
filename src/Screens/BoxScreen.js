import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.yellowBox}></View>
            <View style={styles.greenBox}></View>
            <View style={styles.blueBox}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    yellowBox: {
        height: 100,
        width: 100,
        backgroundColor: 'yellow'
    },
    greenBox: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop: 100
    },
    blueBox: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',

    }

});
export default BoxScreen;