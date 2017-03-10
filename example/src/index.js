// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import RNDraftJS from 'react-native-draftjs-render';

import getJson from './getJson';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  state: {
    resourceMock: Object,
  }
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
    const customStyles = {
      unstyled: {
        fontSize: 18,
        fontWeight: 'normal',
        letterSpacing: -0.75,
        lineHeight: 32,
      },
    };
    return (
      <ScrollView style={styles.container}>
        <RNDraftJS contentState={this.state.resourceMock} customStyles={customStyles} />
      </ScrollView>
    );
  }
}
