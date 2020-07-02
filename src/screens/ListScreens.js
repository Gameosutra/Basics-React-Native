import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: '10' },
        { name: 'Friend #2', age: '12' },
        { name: 'Friend #3', age: '14' },
        { name: 'Friend #4', age: '15' },
        { name: 'Friend #5', age: '16' },
        { name: 'Friend #6', age: '17' },
        { name: 'Friend #7', age: '18' },
        { name: 'Friend #8', age: '19' },
        { name: 'Friend #9', age: '1' }
    ]

    return ( 
        <FlatList 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor = { (friend) => friend.name}
            data={friends} 
            renderItem ={({ item }) => {
                return <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{item.name}-</Text>
                    <Text style={styles.textStyle}>{item.age}</Text>
                </View>
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical: 35
    },
    viewStyle: {
        flexDirection: "row"
    }
});

export default ListScreen;