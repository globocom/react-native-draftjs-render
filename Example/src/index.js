import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RNDraftJS from 'react-native-draftjs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNDraftJS />
      </View>
    );
  }
}

