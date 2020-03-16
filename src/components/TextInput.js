import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({label, value, onChangeText}) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    }}>
    <Text style={{fontWeight: '100',fontSize:20}}>{label}</Text>
    <TextInput
      value={value}
      style={{color:'#000',fontSize:15}}
      onChangeText={onChangeText}
    />
  </View>
);

export default Input;
