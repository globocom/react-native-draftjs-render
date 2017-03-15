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
  customStyle?: any,
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
      props.inlineStyles,
      props.entityRanges,
      props.entityMap,
      props.navigate,
    );

    return (<Text
      style={[defaultStyles[props.type], props.customStyle]}
    >{textElements}</Text>);
  }
  return null;
};

DraftJsText.propTypes = {
  text: React.PropTypes.string,
  customStyle: React.PropTypes.any,
  inlineStyles: React.PropTypes.array,
};

DraftJsText.defaultProps = {
  text: '',
  customStyle: undefined,
  inlineStyles: [],
  navigate: undefined,
};

export default DraftJsText;
