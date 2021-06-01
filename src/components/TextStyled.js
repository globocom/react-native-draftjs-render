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
    fontFamily: 'opensans-bold',
    color: '#48454F',
  },
  italic: {
    fontStyle: 'italic',
    fontFamily: 'opensans-italic',
    color: '#48454F',
  },
  link: {
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#48454F',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: '#48454F',
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
  const {
    type,
    customStyles,
    onPress,
    lineHeight,
    text,
  } = props;
  const textStyle = getStyles(type, customStyles);

  if (onPress) {
    return <Text style={[textStyle, lineHeight]} onPress={onPress}>{text}</Text>;
  }
  return <Text style={[textStyle, lineHeight]}>{text}</Text>;
};

TextStyled.defaultProps = {
  text: '',
  onPress: undefined,
};

export default TextStyled;
