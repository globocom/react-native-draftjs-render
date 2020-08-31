# React Native Draft.js Render

[![Build Status](https://travis-ci.org/globocom/react-native-draftjs-render.svg?branch=master)](https://travis-ci.org/globocom/react-native-draftjs-render)
[![Coverage Status](https://coveralls.io/repos/github/globocom/react-native-draftjs-render/badge.svg)](https://coveralls.io/github/globocom/react-native-draftjs-render)
[![npm version](https://badge.fury.io/js/react-native-draftjs-render.svg)](https://www.npmjs.com/package/react-native-draftjs-render)
[![license](https://img.shields.io/npm/l/react-native-draftjs-render.svg)](https://github.com/globocom/react-native-draftjs-render/blob/master/LICENSE)

A React Native render for [Draft.js](http://draftjs.org/) model.

This project is based on [globocom/react-native-draftjs-render](https://github.com/globocom/react-native-draftjs-render).

## What changes?

- Strongtype: Flow has been replace with Typescript for all files.
- Apply `useMemo` for most components.
- Refactor many if-else logic to simplify the code flow.
- Test cases has been remove (use this lib at your own risk).

## Getting Started

Install **RN Draft.js Render** on your React Native project, using NPM or Yarn:

```sh
yarn add rn-draftjs-render
# or...
npm i -S rn-draftjs-render
```

## Using

Just import and insert your Draft.js model on getRNDraftJSBlocks:

```ts
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import DraftJsImage from './draft-js-image';
import { Block, ContentState, CustomStyles, DraftJsRender } from './renderer';

interface Props {
  content: ContentState;
  contentWidth: number;
  onLinkPress?: (url: string) => Promise<void>;
}

export default function DraftJsContentDisplay(props: Props): JSX.Element {
  const { content, contentWidth, onLinkPress } = props;

  const atomicHandler = useCallback(
    ({ block }: { block: Block }): JSX.Element => {
      const entityKey = block?.entityRanges?.['0']?.key;
      if (!entityKey) return null;
      const entity = content?.entityMap?.[entityKey];
      if (!entity) return null;

      switch (entity.type) {
        case 'IMAGE':
          return <DraftJsImage uri={entity?.data.src} width={contentWidth} />;
        default:
          return null;
      }
    },
    [content?.entityMap, contentWidth],
  );

  return (
    <DraftJsRender
      contentState={content}
      atomicHandler={atomicHandler}
      customStyles={customStyles}
      textProps={{ selectable: true }}
      navigate={onLinkPress}
    />
  );
}

const customStyles = StyleSheet.create({
  viewAfterList: {
    height: 8,
  },
  'code-block': {
    marginTop: 8,
    backgroundColor: '#cecece',
    padding: 8,
    marginBottom: 16,
  },
  // ... More custom styles
} as CustomStyles);
```

Example image component for `react-native`.

```tsx
import images from '@app/common/images';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const noop = () => null;
const hitSlop = { left: 10, bottom: 10, right: 10, top: 10 } as const;

interface Props {
  width: number;
  uri: string;
}

export default function DraftJsImage(props: Props): JSX.Element {
  const { uri, width } = props;

  const [dimension, setDimension] = useState<{ h: number; w: number }>(undefined);

  useEffect(() => {
    // Get remote image dimension
    Image.getSize(uri, (w, h) => setDimension({ h, w }), console.error);
  }, [uri]);

  const height = useMemo(() => {
    if (!dimension) return 1;

    return width * (dimension.h / dimension.w);
  }, [dimension, width]);

  /**=================== Modal ====================== */
  const [visible, setVisible] = useState<boolean>(false);
  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);

  const imageUrls = useMemo(() => {
    if (!dimension) return [];
    return [{ url: uri, width: dimension.w, height: dimension.h }];
  }, [dimension, uri]);

  return (
    <View style={styles.container}>
      {!!dimension && (
        <Modal visible={visible} transparent={true} animationType={'fade'} onRequestClose={hideModal}>
          <ImageViewer
            imageUrls={imageUrls}
            backgroundColor={'rgba(0,0,0,0.3)'}
            onSwipeDown={hideModal}
            renderIndicator={noop}
            saveToLocalByLongPress={false}
            enableSwipeDown
          />

          <View style={styles.closeIconWrap}>
            <TouchableOpacity onPress={hideModal} activeOpacity={1} hitSlop={hitSlop}>
              <Image source={images.ic_close} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      <TouchableOpacity style={{ width, height }} onPress={showModal} activeOpacity={1}>
        <Image source={{ uri }} style={{ width, height }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 16,
  },
  closeIconWrap: {
    position: 'absolute',
    top: 44,
    right: 22,
  },
  closeIcon: {
    height: 24,
    width: 24,
    tintColor: 'white',
  },
});
```
