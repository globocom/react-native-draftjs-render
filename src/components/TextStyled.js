// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

type TextStyledPropsType = {
 text: string,
 type: string,
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

const TextStyled = (props: TextStyledPropsType): any =>
  <Text style={styles[props.type]}>{props.text}</Text>;

TextStyled.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
};

TextStyled.defaultProps = {
  text: '',
};

export default TextStyled;
