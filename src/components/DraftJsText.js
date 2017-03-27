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

type DraftJsTextPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function,
};

const DraftJsText = (props: DraftJsTextPropsType): any => {
  let textElements = props.text;

  if (textElements) {
    textElements = loadAttributes(
      props.text,
      props.customStyles,
      props.inlineStyles,
      props.entityRanges,
      props.entityMap,
      props.navigate,
    );

    const customStyle = props.customStyles ? props.customStyles[props.type] : undefined;

    return (<Text
      style={[defaultStyles[props.type], customStyle]}
    >{textElements}</Text>);
  }
  return null;
};

DraftJsText.propTypes = {
  text: React.PropTypes.string,
  customStyles: React.PropTypes.any,
  inlineStyles: React.PropTypes.array,
};

DraftJsText.defaultProps = {
  text: '',
  customStyles: {},
  inlineStyles: [],
  navigate: undefined,
};

export default DraftJsText;
