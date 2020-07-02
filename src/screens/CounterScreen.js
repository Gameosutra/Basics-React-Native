import React, { useState, useReducer } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    return {
        ...state,
        counter: state.counter + action.payload,
    }
}

const CounterScreen = () => {
    const[state, dispath] = useReducer(reducer,{counter: 0})    

    return (
        <View>
            <Button title="Increase" onPress={() => dispath({payload: 1}) }/>
            <Button title="Decrease" onPress={() => dispath({payload: -1}) }/>
            <Text style={styles.textStyle}>Current Count: {state.counter}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
 textStyle: {
     fontSize: 30,
     margin: 90,
 }
});

export default CounterScreen;