import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const reducer = (state, action) => {
        // state === { red: number, blue: number, green: number}
        // action === { type: 'red' || green || blue, payLoad: Counter_Increatent }

        switch(action.type){
            case 'red':
                return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state : { ...state, red: state.red + action.payload };

            case 'green':
                return state.green + action.payload > 255 || state.green + action.payload < 0 
                ? state : { ...state, green: state.green + action.payload };
            case 'blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state : { ...state, blue: state.blue + action.payload };
            default:
                return state;
        }
}

const SquareScreen = () => {
    
    const [state, dispath] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispath({type: 'red', payload: COLOR_INCREMENT}) }
                onDecrease={() => dispath({type: 'red', payload: -1*COLOR_INCREMENT}) } 
                color="Red" />
            <ColorCounter
                onIncrease={() => dispath({type: 'blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispath({type: 'blue', payload: -1*COLOR_INCREMENT})} 
                color="Blue" />
            <ColorCounter 
                onIncrease={() => dispath({type: 'green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispath({type: 'green', payload: -1*COLOR_INCREMENT})} 
                color="Green" />
            <View 
                style={{ 
                    height:150,
                    margin:130, 
                    width:150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
                >
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    textStyle: {
        margin: 20,
        fontSize: 30,
    }
});

export default SquareScreen;