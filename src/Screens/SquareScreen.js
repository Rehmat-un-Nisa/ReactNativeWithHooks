import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ColorAdjustor from '../Components/ColorAdjustor';


const CHANGE_LIMIT = 15;

const SquareScreen = () => {
    const [red, setRed]= useState(0);
    const [green, setGreen]= useState(0);
    const [blue, setBlue]= useState(0);
    
    const setColor = (color, change) =>{
        switch(color){
            case 'Red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
            case 'Blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return; 
            case 'Green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change); 
            return;
        }
        }
    console.log(`rgb(${red}, ${green}, ${blue})`)
    return (<View>
        <ColorAdjustor color="Red" 
        onIncrease={()=>setColor('Red',CHANGE_LIMIT)} 
        onDecrease={()=>setColor('Red',-1*CHANGE_LIMIT)} 
        />

        <ColorAdjustor color="Green" 
        onIncrease={()=>setColor('Green',CHANGE_LIMIT)} 
        onDecrease={()=>setColor('Green',-1*CHANGE_LIMIT)} 
        />
        <ColorAdjustor color="Blue"
         onIncrease={()=>setColor('Blue',CHANGE_LIMIT)} 
         onDecrease={()=>setColor('Blue',-1*CHANGE_LIMIT)} 
        />
        
        <View style={{height:200, width:200,alignSelf:'center',marginTop:50, backgroundColor:`rgb(${red}, ${green}, ${blue})`
            }}>
        </View>

    </View>)
};

const styles = StyleSheet.create({});

export default SquareScreen;