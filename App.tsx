import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from './components/Button'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => console.log('Button Pressed')}>
          Hola
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
});
