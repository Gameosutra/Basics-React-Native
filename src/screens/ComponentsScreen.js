import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hello To You!</Text>;
    return ( 
        <View>
            <Text style={styles.textStyle}>This is Componenets Screen</Text>
            {greeting}        
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 25
    }
});

export default ComponentsScreen;