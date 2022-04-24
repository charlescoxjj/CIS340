import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style = {StyleSheet.container}>
            <Text> Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 60,
    },

    largGreen: {
        color: 'green',
        fontWeight: ' bold',
        fontSize: 20,
    },

    yellow: {
        color: 'yellow',
        fontSize: 10,

    }
    });