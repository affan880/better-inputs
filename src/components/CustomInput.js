import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomInput = ({
  value = '',
  onChangeText,
  placeholder = 'Enter text...',
  style = {},
  inputStyle = {},
}) => (
  <View style={[styles.container, style]}>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.input, inputStyle]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default CustomInput;
