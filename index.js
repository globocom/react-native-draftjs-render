import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    flex: 1,
  },
};

function getBlocks(bodyData = {}) {
  if (!bodyData.blocks) {
    return;
  }

  return bodyData.blocks.map(item => <Text key={item.key}>{item.text}</Text>);
}

function RNDraftJS({ contentState }) {
  const blocks = getBlocks(contentState);

  return (
    <View style={styles.container}>
      { blocks }
    </View>
  );
}

module.exports = RNDraftJS;
