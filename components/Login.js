import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput
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
    console.log(`Username: ${username}, Password: ${password}`);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <Text>Login</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="Username"
              onChangeText={(text) => this.setState({ username: text })}
            />
            <TextInput 
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Button
              title="login"
              onPress={this._submitLoginInfo}
            >Login</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: ScreenHeight,
    width: ScreenWidth
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  textInput: {
    flex: 1,
    height: 40, 
    width: ScreenWidth,
    padding: 5,
    marginBottom: 2
  }
});
