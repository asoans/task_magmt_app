// src/components/MyComponent.ios.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is an iOS-specific Component</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click Me (iOS)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default MyComponent;
