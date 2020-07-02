import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const InputScreen =() => {
const [name, setName] = useState('');

return (
    <View>
        <Text style={styles.styleText}>Enter Name</Text>
        <TextInput 
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false} 
            value={name}
            onChangeText={(newValue) => {
                setName(newValue);
            }}
        />
        <Text style={styles.styleText}>My Name is:  {name}</Text>
        { name && name.length<5 ? <Text>Length should be more than 5</Text> : null }
    </View>
);
};


const styles=StyleSheet.create({
    textInput: {
        margin:15,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    },
    styleText: {
        fontSize: 20
    }
});

export default InputScreen;