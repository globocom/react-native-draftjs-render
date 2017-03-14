// @flow

import React, {
  PropTypes,
} from 'react';
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
 navigate: Function,
};

function RNDraftJSRender(props: RnDraftJsRenderPropsType): any {
  const blocks = getBlocks(
    props.contentState, props.customStyles, props.atomicHandler, props.navigate);

  return (
    <View style={styles.container}>
      { blocks }
    </View>
  );
}

RNDraftJSRender.propTypes = {
  contentState: PropTypes.object.isRequired,
  customStyles: PropTypes.object,
  atomicHandler: PropTypes.func,
};

RNDraftJSRender.defaultProps = {
  customStyles: {},
  atomicHandler: (): any => null,
};

module.exports = RNDraftJSRender;
