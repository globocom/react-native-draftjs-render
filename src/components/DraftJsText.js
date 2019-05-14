/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import { Text } from 'react-native';

import loadAttributes from '../loadAttributes';

import defaultStyles from './defaultStyles';
import type { DraftJsTextPropsType } from './types';

const DraftJsText = (props: DraftJsTextPropsType): any => {
  const { text, renderEmptyBlocks } = props;
  let textElements = text;

  if (textElements || renderEmptyBlocks) {
    textElements = loadAttributes({
      text: props.text,
      customStyles: props.customStyles,
      inlineStyles: props.inlineStyles,
      entityRanges: props.entityRanges,
      entityMap: props.entityMap,
      navigate: props.navigate,
      textProps: props.textProps,
      type: props.type,
    });

    const customStyle = props.customStyles ? props.customStyles[props.type] : undefined;
    const textAlignStyle = { textAlign: props.data.textAlignment };

    return (
      <Text
        style={[defaultStyles[props.type], textAlignStyle, customStyle]}
        {...props.textProps}
      >
        {textElements}
      </Text>
    );
  }
  return null;
};

DraftJsText.defaultProps = {
  text: '',
  data: {},
  inlineStyles: [],
  navigate: undefined,
};

export default DraftJsText;
