import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const friends = [
    { name: 'friend #1', age: 21},
    { name: 'friend #2', age: 31},
    { name: 'friend #3', age: 22},
    { name: 'friend #4', age: 27},
    { name: 'friend #5', age: 20},
    { name: 'friend #6', age: 22},
    { name: 'friend #7', age: 27},
    { name: 'friend #8', age: 20}
];

const ListScreen = () => {
return (
<FlatList 
horizontal ={false}
keyExtractor = {friend => friend.name}
data = {friends}
renderItem = {({ item }) => {   
    return (
        <Text style= {styles.textnameStyle}>{item.name}-Age {item.age} </Text>
    );
}
}
/>);
};

const styles = StyleSheet.create({
    textnameStyle:{marginVertical:50,fontSize:20}
});

export default ListScreen;