import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen=()=>{
    return (
        <View style={styles.viewStyle}>
            <View style={styles.newViewStyle}>
                <Text style={styles.textOneStyle}>
                    
                </Text>
                <Text style={styles.textTwoStyle}>
                    
                </Text>
            </View>
            <Text style={styles.textThreeStyle}>
                
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    viewStyle: {
    },
    newViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    textOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    textTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
    textThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf:'center'
    }
});

export default BoxScreen;