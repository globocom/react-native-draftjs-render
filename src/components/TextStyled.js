/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import type { TextStyledPropsType } from './types';

const styles = StyleSheet.flatten({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
});

const getStyles = (itemType: any, customStyles?: Object): any => {
  if (!customStyles) return [styles[itemType]];
  if (typeof itemType === 'string') return [styles[itemType], customStyles[itemType]];

  const defaultTextStyles = {};
  const customTextStyles = {};
  itemType.forEach((i: string) => {
    Object.assign(defaultTextStyles, styles[i]);
    if (customStyles) Object.assign(customTextStyles, customStyles[i]);
  });
  const newStyles = [defaultTextStyles, customTextStyles];
  return newStyles;
};

const TextStyled = (props: TextStyledPropsType): any => {
  const textStyle = getStyles(props.type, props.customStyles);

  if (props.onPress) {
    return <Text style={textStyle} onPress={props.onPress}>{props.text}</Text>;
  }
  return <Text style={textStyle}>{props.text}</Text>;
};

TextStyled.defaultProps = {
  text: '',
  onPress: undefined,
};

export default TextStyled;
