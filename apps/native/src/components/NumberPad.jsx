import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button as RNButton, Dimensions, Pressable } from 'react-native';
const { width } = Dimensions.get('window');

const Button = ({ title }) => (
    <View style={{
        width: (width / 3) - 15,
    }}>

        <Pressable style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            paddingVertical: 5,
            borderRadius: 10,
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    </View>
);
const NumberPad = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Button title="1" />
                <Button title="2" />
                <Button title="3" />
            </View>
            <View style={styles.row}>
                <Button title="4" />
                <Button title="5" />
                <Button title="6" />
            </View>
            <View style={styles.row}>
                <Button title="7" />
                <Button title="8" />
                <Button title="9" />
            </View>
            <View style={styles.row}>
                <View style={{ width: (width / 3) - 15 }} />
                <Button title="0" />
                <Button title="<" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2A2D31',
        paddingVertical: 20,
        paddingHorizontal: 35,
        borderRadius: 10,
        minWidth: 100,
        height: 100
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default NumberPad;
