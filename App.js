/**
 * React Native App Documentation
 * https://github.com/facebook/react-native
 */

import React, {Fragment} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
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

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  scrollView: {
    height: ScreenHeight,
    width: ScreenWidth,
  },
  body: {
    flex: 1
  }
});

export default App;
