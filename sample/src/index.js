// @flow

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
} from 'react-native';

import RNDraftJS from '../react-native-draftjs-render';

import data from './resourceMock.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#F5FCFF',
  },
});

const customStyles = {
  unstyled: {
    fontSize: 18,
    fontWeight: 'normal',
    letterSpacing: -0.75,
    lineHeight: 32,
    marginBottom: 21,
  },
  link: {
    color: '#c4170c',
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  unorderedListItemContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  unorderedListItemBullet: {
    marginRight: 18,
    position: 'relative',
    top: 14,
    width: 6,
    height: 6,
    alignSelf: 'flex-start',
  },
  'unordered-list-item': {
    fontSize: 18,
    lineHeight: 32,
    alignSelf: 'flex-start',
    flex: 1,
  },
  orderedListContainer: {
    marginBottom: 16,
  },
  orderedListItemNumber: {
    fontSize: 18,
    lineHeight: 32,
    marginRight: 11,
    alignSelf: 'flex-start',
    color: '#c4170c',
  },
  'ordered-list-item': {
    alignSelf: 'flex-start',
    fontSize: 18,
    lineHeight: 32,
    flex: 1,
  },
  'code-block': {
    backgroundColor: '#e2e2e2',
  },
  blockquote: {
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 33,
    paddingTop: 24,
    marginBottom: 24,
    fontSize: 33,
    letterSpacing: -2,
  },
  viewAfterList: {
    marginBottom: 32,
  },
};

const atomicHandler = (item: Object): any => {
  switch (item.data.type) {
    case 'backstage-photo':
      return (
        <View key={item.key} style={{ flex: 1 }}>
          <Image
            style={{ width: 288, height: 161 }}
            source={{ uri: item.data.file.url }}
          />
        </View>
      );
    default:
      return null;
  }
};

export default function App(): any {
  return (
    <ScrollView style={styles.container}>
      <RNDraftJS
        contentState={data}
        customStyles={customStyles}
        atomicHandler={atomicHandler}
      />
    </ScrollView>
  );
}
