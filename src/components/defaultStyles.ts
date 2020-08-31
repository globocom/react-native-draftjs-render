import { Platform, StyleSheet } from 'react-native';

import { BlockStyles } from '../typings';

export default StyleSheet.create({
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
    marginVertical: 16,
  },
  'header-two': {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  'header-three': {
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  'header-four': {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  'header-five': {
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  'header-six': {
    fontSize: 11,
    fontWeight: 'bold',
    marginVertical: 16,
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
    fontFamily: Platform.select({ android: 'monospace', ios: 'Courier New' }),
    padding: 16,
  },
  blockquote: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 16,
  },
} as BlockStyles);
