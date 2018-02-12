/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

import loadAttributes from '../loadAttributes';

import defaultStyles from './defaultStyles';
import type { DraftJsTextPropsType } from './defaultProps';

const DraftJsText = (props: DraftJsTextPropsType): any => {
  let textElements = props.text;

  if (textElements) {
    textElements = loadAttributes({
      text: props.text,
      customStyles: props.customStyles,
      inlineStyles: props.inlineStyles,
      entityRanges: props.entityRanges,
      entityMap: props.entityMap,
      navigate: props.navigate,
    });

    const customStyle = props.customStyles ? props.customStyles[props.type] : undefined;
    const textAlign = props.data['text-align'];
    const textAlignStyle = textAlign ? { textAlign } : {}

    return (
      <Text
        style={[defaultStyles[props.type], customStyle, textAlignStyle]}
      >{textElements}
      </Text>);
  }
  return null;
};

DraftJsText.defaultProps = {
  text: '',
  customStyles: {},
  inlineStyles: [],
  navigate: undefined,
};

export default DraftJsText;
