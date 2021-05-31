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

const defaultStyles = (PlatformOS: string): Object => StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'opensans',
  },
  unstyled: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'opensans',
  },
  'header-one': {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-two': {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 20,
    marginBottom: 20,
  },
  'header-three': {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 19,
    marginBottom: 19,
  },
  'header-four': {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 21,
    marginBottom: 21,
  },
  'header-five': {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 22,
    marginBottom: 22,
  },
  'header-six': {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'opensans-bold',
    marginTop: 25,
    marginBottom: 25,
  },
  'unordered-list-item': {
    flex: 1,
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'opensans',
  },
  'ordered-list-item': {
    flex: 1,
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'opensans',
  },
  'code-block': {
    backgroundColor: '#cecece',
    fontFamily: PlatformOS === 'android' ? 'monospace' : 'Courier New',
    padding: 16,
  },
  blockquote: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontFamily: 'opensans-italic',
    marginLeft: 16,
  },
});

export { defaultStyles as defaultStylesForTest };
export default defaultStyles(Platform.OS);
