import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imgSource, score}) => {
    
    return (
    <View>
        <Image source={imgSource}/>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.title}>Score: {score}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:20
    }
});

export default ImageDetail;
