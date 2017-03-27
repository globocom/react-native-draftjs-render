/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import {
  StyleSheet,
  Platform,
} from 'react-native';

const defaultStyles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  unstyled: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'header-one': {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-two': {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  'header-three': {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 19,
    marginBottom: 19,
  },
  'header-four': {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 21,
    marginBottom: 21,
  },
  'header-five': {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-six': {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
  },
  'unordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'ordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'code-block': {
    backgroundColor: '#cecece',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier New',
    padding: 16,
  },
  blockquote: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 16,
  },
});

export default defaultStyles;
