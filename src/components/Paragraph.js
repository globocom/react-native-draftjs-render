// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

type ParagraphPropsType = {
 text: string,
 customStyle?: any,
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

const Paragraph = (props: ParagraphPropsType): any => {
  if (props.text) {
    return (<Text
      style={[styles.paragraph, props.customStyle]}
    >{props.text}</Text>);
  }
  return null;
};

Paragraph.propTypes = {
  text: React.PropTypes.string,
  customStyle: React.PropTypes.any,
};

Paragraph.defaultProps = {
  text: '',
  customStyle: undefined,
};

export default Paragraph;
