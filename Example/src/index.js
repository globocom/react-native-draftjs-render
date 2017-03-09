import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RNDraftJS from 'react-native-draftjs';

import getJson from './getJson';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resourceMock: {},
    };
  }

  componentDidMount() {
    getJson()
      .then((data) => {
        this.setState({ resourceMock: data.bodyData });
      })
      .catch(error => console.log('>>>', error));
  }

  render() {
    return (
      <View style={styles.container}>
        <RNDraftJS contentState={this.state.resourceMock} />
      </View>
    );
  }
}
