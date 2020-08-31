import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { BlockQuoteProps } from '../typings';
import DraftJsText from './DraftJsText';

export default function BlockQuote(props: BlockQuoteProps): JSX.Element {
  const { customStyles } = props;

  return (
    <View style={[styles.blockquoteContainer, customStyles?.blockquoteContainer]}>
      <View style={customStyles?.blockquoteIconBefore} />
      <DraftJsText {...props} />

      <View style={customStyles?.blockquoteIconAfter} />
    </View>
  );
}

const styles = StyleSheet.create({
  blockquoteContainer: {
    borderLeftColor: '#eee',
    borderLeftWidth: 4,
    borderStyle: 'solid',
    marginTop: 22,
    marginBottom: 22,
    paddingLeft: 12,
  },
});
