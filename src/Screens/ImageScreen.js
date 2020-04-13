import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (<View>
        
         <ImageDetail 
         title='Forest'
         imgSource={require('../../assets/forest.jpg')}
         score={4}
         />
         <ImageDetail 
         title='Beach'
         imgSource={require('../../assets/beach.jpg')}
         score={22}
         />
         <ImageDetail 
         title='mountain'
         imgSource={require('../../assets/mountain.jpg')}
         score={21}
         />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;