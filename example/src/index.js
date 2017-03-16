// @flow

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
} from 'react-native';
import RNDraftJS from 'react-native-draftjs-render';

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
  },
  link: {
    color: '#c4170c',
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
};

const atomicHandler = (item: Object): any => {
  switch (item.data.type) {
    case 'backstage-photo':
      return (
        <View key={item.key} style={{ flex: 1 }}>
          <Image
            style={{ width: 300, height: 300 }}
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
