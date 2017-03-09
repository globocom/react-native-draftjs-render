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

function RNDraftJS({ contentState, customStyles }) {
  const blocks = getBlocks(contentState, customStyles);

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

