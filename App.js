import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    // button on press change background color

    <View style={styles.container}>
      <Text style={styles.text}>First app built by Vinit Parekh!</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button color={'green'} title="Plus" onPress={() => setCount(count+1)} />
      <Button color={'red'} title="Minus" onPress={() => setCount(count-1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    color: '#f0f',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    margin: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  }
});
