import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from './src/components/heaer';
import Input from './src/components/TextInput';
import LoginForm from './src/views/LoginForm';
import {NavigationContainer} from '@react-navigation/native';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <NavigationContainer>
        <View>
          <Header name="Authentication" />
          <LoginForm />
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
