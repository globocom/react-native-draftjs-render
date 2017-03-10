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

type RNDraftJSPropsType = {
 contentState: Object,
 customStyles?: Object,
};

function RNDraftJS(props: RNDraftJSPropsType): any {
  const blocks = getBlocks(props);

  return (
    <View style={styles.container}>
      { blocks }
    </View>
  );
}

RNDraftJS.propTypes = {
  contentState: PropTypes.object.isRequired,
  customStyles: PropTypes.object,
};

RNDraftJS.defaultProps = {
  customStyles: {},
};

module.exports = RNDraftJS;

