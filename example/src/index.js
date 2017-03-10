// @flow

import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import RNDraftJS from 'react-native-draftjs-render';

import data from './resourceMock.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#F5FCFF',
  },
});

const customStyles = {
  unstyled: {
    fontSize: 18,
    fontWeight: 'normal',
    letterSpacing: -0.75,
    lineHeight: 32,
  },
};

export default function App(): any {
  return (
    <ScrollView style={styles.container}>
      <RNDraftJS contentState={data} customStyles={customStyles} />
    </ScrollView>
  );
}
