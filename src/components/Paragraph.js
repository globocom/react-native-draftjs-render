import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

const Paragraph = props => (
  <Text
    style={[styles.paragraph, props.customStyle]}
  >{props.text}</Text>
);

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired,
  customStyle: React.PropTypes.any,
};

Paragraph.defaultProps = {
  customStyle: undefined,
};

export default Paragraph;
