import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Image source={props.imageSource} />
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.textStyle}>Image Score - {props.score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
      },
      viewStyle: {
          margin:10
      }
});

export default ImageDetail;