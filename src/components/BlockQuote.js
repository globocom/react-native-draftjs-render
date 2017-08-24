/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import DraftJsText from '../components/DraftJsText';

import type { BlockQuotePropsType } from './defaultProps';

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

const BlockQuote = (props: BlockQuotePropsType): any => {
  const blockquoteCustomStyleContainer = props.customStyles ?
    props.customStyles.blockquoteContainer :
    undefined;
  const blockquoteCustomStyleIconBefore = props.customStyles ?
    props.customStyles.blockquoteIconBefore :
    undefined;
  const blockquoteCustomStyleIconAfter = props.customStyles ?
    props.customStyles.blockquoteIconAfter :
    undefined;

  return (
    <View style={[styles.blockquoteContainer, blockquoteCustomStyleContainer]}>
      <View style={blockquoteCustomStyleIconBefore} />
      <DraftJsText
        {...props}
      />
      <View style={blockquoteCustomStyleIconAfter} />
    </View>);
};

BlockQuote.defaultProps = {
  customStyles: undefined,
  type: '',
};

export default BlockQuote;
