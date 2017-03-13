// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import parseStyles from '../parseStyles';

type ParagraphPropsType = {
 text: string,
 customStyle?: any,
 inlineStyles: Array<Object>,
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

const Paragraph = (props: ParagraphPropsType): any => {
  let textElements = props.text;
  if (props.inlineStyles.length) {
    textElements = parseStyles(props.text, props.inlineStyles);
  }

  if (props.text) {
    return (<Text
      style={[styles.paragraph, props.customStyle]}
    >{textElements}</Text>);
  }
  return null;
};

Paragraph.propTypes = {
  text: React.PropTypes.string,
  customStyle: React.PropTypes.any,
  inlineStyles: React.PropTypes.array,
};

Paragraph.defaultProps = {
  text: '',
  customStyle: undefined,
  inlineStyles: [],
};

export default Paragraph;
