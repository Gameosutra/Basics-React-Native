import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    );
}

const styles=StyleSheet.create({
    textStyle: {
        margin: 20,
        fontSize: 30,
    }
});

export default ColorCounter;