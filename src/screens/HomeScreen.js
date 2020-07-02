import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Record सूचि</Text>
      <View style={styles.viewStyle}>
        <Button 
          title="Go To Componenets Demo" 
          onPress={() => {
            navigation.navigate('Components')
          }} 
        />
        <Button 
          title="Go To List Demo"
          onPress={() => navigation.navigate('List')}
        />
        <Button 
          title="Go To Image Screens"
          onPress={() => navigation.navigate('Image')}
        />
        <Button 
          style={{marginBotton: 10}}
          title="Go To Counter Screens"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button 
          style={{marginBotton: 10}}
          title="Go To Color Screens"
          onPress={() => navigation.navigate('Color')}
        />
        <Button 
          style={{marginBotton: 10}}
          title="Go To Square Screens"
          onPress={() => navigation.navigate('Square')}
        />
        <Button 
          style={{marginBotton: 10}}
          title="Go To Input Screens"
          onPress={() => navigation.navigate('Input')}
        />
        <Button 
          style={{marginBotton: 10}}
          title="Go To Box Screens"
          onPress={() => navigation.navigate('Box')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle: "italic",
    margin: 20
  },
  viewStyle: {
    margin: 20
  }
});

export default HomeScreen;

