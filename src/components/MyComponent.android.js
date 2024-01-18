// MyComponent.android.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>This is Android-specific UI</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // Android-specific styles
  },
  text: {
    // Shared styles or Android-specific styles
  },
});

export default MyComponent;
