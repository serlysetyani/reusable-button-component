import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.btnBody} onPress={props.onPress}>
            <Text style={styles.btnText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        backgroundColor: '#25D366',
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 24
    }
});

export { Button };