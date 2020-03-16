import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Input from '../components/TextInput';
import {CardSection} from '../components/CardSection';
import {Card} from '../components/Card';
export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          value={this.state.value} 
          label="Email"
            onChangeText={value => this.setState({value})}
           
          />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
