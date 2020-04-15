import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const InputTextScreen = () => {

    const [name, setName ] = useState('');
    const [inputTextPassword, setPassword ] = useState('');

    return (<View>
        <TextInput 
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        placeholder="Enter your name"
        onChangeText={(newValue)=>setName(newValue)}
        />
        <Text>My Name is {name}</Text>
         <TextInput 
        style={styles.textInputPassword}
        autoCapitalize='none'
        autoCorrect={false}
        value={inputTextPassword}
        placeholder="Enter your 5 digit password"
        onChangeText={(newValue)=>setPassword(newValue)}
        />
        {inputTextPassword.length>5 ? <Text>Password should be less than 5 characters</Text>:null}
    </View>)
};

const styles = StyleSheet.create({
    textInput:{
        borderColor: 'black',
        borderWidth: 1,
        margin:10
    },
    textInputPassword:{
        borderColor: 'red',
        borderWidth: 1,
        margin:10
    }

})

export default InputTextScreen;