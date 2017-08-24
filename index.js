/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  View,
} from 'react-native';

import getBlocks from './src/getBlocks';

const styles = {
  container: {
    flex: 1,
  },
};

type RnDraftJsRenderPropsType = {
 contentState: Object,
 customStyles?: Object,
 atomicHandler: Function,
 navigate?: Function,
 orderedListSeparator?: string,
};

const RNDraftJSRender = (props: RnDraftJsRenderPropsType): any => {
  const blocks = getBlocks(
    props.contentState, props.customStyles, props.atomicHandler,
    props.navigate, props.orderedListSeparator);

  return (
    <View style={styles.container}>
      { blocks }
    </View>
  );
};

RNDraftJSRender.defaultProps = {
  customStyles: {},
  atomicHandler: (): any => null,
  navigate: undefined,
  orderedListSeparator: '.',
};

module.exports = RNDraftJSRender;
