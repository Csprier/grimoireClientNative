import React, { Fragment, Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  _submitLoginInfo = () => {
    const username = this.state.username,
          password = this.state.password;
    alert(username, password);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View style={styles.body}>
              <Text>Login</Text>
              <TextInput 
                style={{ height: 40 }}
                placeholder="Username"
                onChangeText={(username) => this.setState({ username: username })}
                value={this.state.username}
              />
              <TextInput 
                style={{ height: 40 }}
                placeholder="Password"
                onChangeText={(password) => this.setState({ password: password })}
                value={this.state.password}
              />
              <View style={styles.container}>
                <Text>{this.state.username}</Text>
                <Text>{this.state.password}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // width: 100,
    // height: 100
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1
  }
});
