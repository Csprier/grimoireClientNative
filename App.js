/**
 * React Native App Documentation
 * https://github.com/facebook/react-native
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './components/Login';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <Text>Hello world</Text>
            <Login />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: 100,
    height: 100
  },
  body: {
    flex: 1
  }
});

export default App;
