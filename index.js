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
};

function RNDraftJSRender(props: RnDraftJsRenderPropsType): any {
  const blocks = getBlocks(props.contentState, props.customStyles);

  return (
    <View style={styles.container}>
      { blocks }
    </View>
  );
}

RNDraftJSRender.propTypes = {
  contentState: PropTypes.object.isRequired,
  customStyles: PropTypes.object,
};

RNDraftJSRender.defaultProps = {
  customStyles: {},
};

module.exports = RNDraftJSRender;
