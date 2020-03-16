import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: '#f7f7f7',
        elevation: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
      }}>
      <Text style={{fontWeight: 'bold', fontStyle: 'normal'}}>
        {props.name}
      </Text>
    </View>
  );
};

export {Header};
