import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
const name = 'NISA'

const ComponentScreen = () => {
return (
<View>
<Text style={styles.textStyle}>Getting Started with React Native</Text>
<Text style={styles.subtextStyle}>My Name is {name}</Text>
</View>
);
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
        color: 'red'
    },
    subtextStyle:{
        fontSize:20
    }
})

export default ComponentScreen