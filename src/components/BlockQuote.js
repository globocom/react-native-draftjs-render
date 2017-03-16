// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

type BlockQuotePropsType = {
 text: string,
 customStyle?: any,
 type: string,
};

const styles = StyleSheet.create({
  blockquoteContainer: {
    borderLeftColor: '#eee',
    borderLeftWidth: 4,
    borderStyle: 'solid',
    marginTop: 22,
    marginBottom: 22,
    paddingLeft: 12,
  },
  blockquote: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'normal',
    marginLeft: 16,
  },
});

const BlockQuote = (props: BlockQuotePropsType): any => (
  <View style={styles.blockquoteContainer}>
    <Text
      style={[styles[props.type], props.customStyle]}
    >{props.text}</Text>
  </View>
);

BlockQuote.propTypes = {
  text: React.PropTypes.string.isRequired,
  customStyle: React.PropTypes.any,
  type: React.PropTypes.string.isRequired,
};

BlockQuote.defaultProps = {
  customStyle: undefined,
};

export default BlockQuote;
