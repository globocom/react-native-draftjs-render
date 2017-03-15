// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import loadAttributes from '../loadAttributes';

type ParagraphPropsType = {
 text: string,
 customStyle?: any,
 inlineStyles: Array<Object>,
 entityRanges: Array<Object>,
 entityMap: Object,
 navigate: Function,
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

const Paragraph = (props: ParagraphPropsType): any => {
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
