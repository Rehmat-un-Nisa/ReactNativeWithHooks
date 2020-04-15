import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const ColorAdjustor = ({ color, onIncrease, onDecrease}) => {
    return (<View>
        <Text>{color}</Text>
        <Button
        title={`Increase ${color}`}
        onPress={()=>onIncrease()}
        />
        <Button
        title={`Increase ${color}`}
        onPress={()=>onDecrease()}
        />
    </View>)
};

const styles = StyleSheet.create({});

export default ColorAdjustor;