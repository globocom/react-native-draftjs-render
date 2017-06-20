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
    lineHeight: 26,
    fontSize: 14,
    fontWeight: 'normal',
  },
  unstyled: {
    lineHeight: 26,
    fontSize: 14,
    fontWeight: 'normal',
  },
  'header-one': {
    lineHeight: 34,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-two': {
    lineHeight: 32,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  'header-three': {
    lineHeight: 30,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 19,
    marginBottom: 19,
  },
  'header-four': {
    lineHeight: 28,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 21,
    marginBottom: 21,
  },
  'header-five': {
    lineHeight: 26,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-six': {
    lineHeight: 26,
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
  },
  'unordered-list-item': {
    lineHeight: 26,
    fontSize: 14,
    fontWeight: 'normal',
  },
  'ordered-list-item': {
    lineHeight: 26,
    fontSize: 14,
    fontWeight: 'normal',
  },
  'code-block': {
    lineHeight: 26,
    backgroundColor: '#cecece',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier New',
    padding: 16,
  },
  blockquote: {
    lineHeight: 26,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 16,
  },
});

export default defaultStyles;
