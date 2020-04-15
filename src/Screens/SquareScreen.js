import React, { useReducer } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ColorAdjustor from '../Components/ColorAdjustor';


const CHANGE_LIMIT = 15;

const reducer = (state, action) =>{

    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state 
            : {...state, red: state.red + action.payload};
        case 'change_green':
           return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state 
            : {...state, green: state.green + action.payload};
        case 'change_blue':
           return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state 
            : {...state, blue: state.blue + action.payload};
        default:
           return state;
    }
}

const SquareScreen = () => {
 
const [state, dispatch ] = useReducer(reducer, {red:0, green:0, blue:0});

const {red, green, blue } = state;

    console.log(`rgb(${red}, ${green}, ${blue})`)
    return (<View>
        <ColorAdjustor color="Red" 
        onIncrease={()=>dispatch({type:'change_red',payload:CHANGE_LIMIT})} 
        onDecrease={()=>dispatch({type:'change_red',payload:-1*CHANGE_LIMIT})} 
        />

        <ColorAdjustor color="Green" 
        onIncrease={()=>dispatch({type:'change_green',payload:CHANGE_LIMIT})} 
        onDecrease={()=>dispatch({type:'change_green',payload:-1*CHANGE_LIMIT})} 
        />
        <ColorAdjustor color="Blue"
          onIncrease={()=>dispatch({type:'change_blue',payload:CHANGE_LIMIT})} 
          onDecrease={()=>dispatch({type:'change_blue',payload:-1*CHANGE_LIMIT})} 
        />
        
        <View style={{height:200, width:200,alignSelf:'center',marginTop:50, backgroundColor:`rgb(${red}, ${green}, ${blue})`
            }}>
        </View>

    </View>)
};

const styles = StyleSheet.create({});

export default SquareScreen;