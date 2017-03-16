// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

type TextStyledPropsType = {
 text: string,
 type: any,
 onPress?: Function,
};

const styles = {
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
};

const getStyles = (itemType: any): any => {
  if (typeof itemType === 'string') return styles[itemType];

  const newStyles = {};
  itemType.forEach((i: string) => {
    Object.assign(newStyles, styles[i]);
  });
  return newStyles;
};

const TextStyled = (props: TextStyledPropsType): any => {
  const textStyle = getStyles(props.type);

  if (props.onPress) {
    return <Text style={textStyle} onPress={props.onPress}>{props.text}</Text>;
  }
  return <Text style={textStyle}>{props.text}</Text>;
};

TextStyled.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.any.isRequired,
};

TextStyled.defaultProps = {
  text: '',
  onPress: undefined,
};

export default TextStyled;
