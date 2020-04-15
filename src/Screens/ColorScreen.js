import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen =() =>{
    const [colors, setcolors] = useState([]);
    return (
        <View>
            <Button
            title="Add Random Color"
            onPress={() => {
                setcolors([...colors, randomRgb()])}
            } 
            />
            <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({item})=>{return (<View style={{height: 50, width: 50, backgroundColor: item}}></View>)}}
            />
           
        </View>
    );
}


const randomRgb = () => {
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
const styles= StyleSheet.create({});

export default ColorScreen;
