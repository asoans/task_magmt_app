import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ced4da',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Input;
