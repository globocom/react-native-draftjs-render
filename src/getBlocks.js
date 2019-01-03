/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import { View } from 'react-native';

import BlockQuote from './components/BlockQuote';
import DraftJsText from './components/DraftJsText';
import UnorderedListItem from './components/UnorderedListItem';
import OrderedListItem from './components/OrderedListItem';
import generateKey from './utils/generateKey';

type ParamsType = {
  contentState: {
    blocks: ?Array<*>,
    entityMap: Object,
  },
  customStyles: Object,
  atomicHandler: Function,
  navigate?: Function,
  orderedListSeparator?: string,
  customBlockHandler?: (Object, ParamsType) => any,
  depthMargin?: number,
  textProps: ?Object,
};

export const ViewAfterList = (props: Object): React$Element<*> => (
  <View {...props} />
);

const getBlocks = (params: ParamsType): ?Array<React$Element<*>> => {
  const {
    contentState,
    customStyles,
    navigate,
    orderedListSeparator,
    customBlockHandler,
    depthMargin,
    atomicHandler,
  } = params;

  const textProps = params.textProps || {};

  if (!contentState.blocks) {
    return null;
  }

  const counters = {
    'unordered-list-item': {
      count: 0,
      type: 'unordered-list-item',
      childCounters: [],
    },
    'ordered-list-item': {
      count: 0,
      type: 'ordered-list-item',
      childCounters: [],
    },
  };

  const checkCounter = (counter: Object): ?React$Element<*> => {
    const myCounter = counter;

    // list types
    if (myCounter.count >= 0) {
      if (myCounter.count > 0) {
        myCounter.count = 0;
        return (
          <ViewAfterList
            style={customStyles && customStyles.viewAfterList}
            key={generateKey()}
          />
        );
      }
      return null;
    }

    // non list types
    if (myCounter['unordered-list-item'].count > 0 || myCounter['ordered-list-item'].count > 0) {
      myCounter['unordered-list-item'].count = 0;
      myCounter['ordered-list-item'].count = 0;
      return (
        <ViewAfterList
          style={customStyles && customStyles.viewAfterList}
          key={generateKey()}
        />
      );
    }

    return null;
  };

  return contentState.blocks
    .map((item: Object): React$Element<*> => {
      const itemData = {
        key: item.key,
        text: item.text,
        type: item.type,
        data: item.data,
        inlineStyles: item.inlineStyleRanges,
        entityRanges: item.entityRanges,
        depth: item.depth,
      };

      switch (item.type) {
        case 'unstyled':
        case 'paragraph':
        case 'header-one':
        case 'header-two':
        case 'header-three':
        case 'header-four':
        case 'header-five':
        case 'header-six':
        case 'code-block': {
          const viewBefore = checkCounter(counters);
          return (
            <View key={generateKey()}>
              {viewBefore}
              <DraftJsText
                {...itemData}
                entityMap={contentState.entityMap}
                customStyles={customStyles}
                navigate={navigate}
                textProps={textProps}
              />
            </View>
          );
        }

        case 'atomic': {
          if (atomicHandler) {
            const viewBefore = checkCounter(counters);
            const atomic = atomicHandler(item, contentState.entityMap);
            if (viewBefore) {
              return (
                <View key={generateKey()}>
                  {viewBefore}
                  {atomic}
                </View>
              );
            }
            return atomic;
          }
          return item;
        }

        case 'blockquote': {
          const viewBefore = checkCounter(counters);
          return (
            <View key={generateKey()}>
              {viewBefore}
              <BlockQuote
                {...itemData}
                entityMap={contentState.entityMap}
                customStyles={customStyles}
                navigate={navigate}
                textProps={textProps}
              />
            </View>
          );
        }

        case 'unordered-list-item': {
          counters[item.type].count += 1;
          const viewBefore = checkCounter(counters['ordered-list-item']);
          return (
            <View key={generateKey()}>
              {viewBefore}
              <UnorderedListItem
                {...itemData}
                entityMap={contentState.entityMap}
                customStyles={customStyles}
                navigate={navigate}
                defaultMarginLeft={depthMargin}
                textProps={textProps}
              />
            </View>
          );
        }

        case 'ordered-list-item': {
          const { type } = item;
          const parentIndex = counters[type].count;
          let number = 0;

          // when new ordered list reset childCounters
          if (parentIndex === 0) {
            counters[type].childCounters = [];
          }

          if (itemData.depth !== undefined && itemData.depth >= 1) {
            if (counters[type].childCounters[parentIndex] === undefined) {
              counters[type].childCounters[parentIndex] = 0;
            }
            counters[type].childCounters[parentIndex] += 1;
            number = counters[type].childCounters[parentIndex];
          } else {
            counters[type].count += 1;
            number = counters[type].count;
          }

          const viewBefore = checkCounter(counters['unordered-list-item']);
          return (
            <View key={generateKey()}>
              {viewBefore}
              <OrderedListItem
                {...itemData}
                separator={orderedListSeparator}
                counter={number}
                entityMap={contentState.entityMap}
                customStyles={customStyles}
                navigate={navigate}
                defaultMarginLeft={depthMargin}
                textProps={textProps}
              />
            </View>
          );
        }

        default: {
          const viewBefore = checkCounter(counters);
          return customBlockHandler ? customBlockHandler(item, params) : (
            <View key={generateKey()}>
              {viewBefore}
            </View>
          );
        }
      }
    });
};

export default getBlocks;
