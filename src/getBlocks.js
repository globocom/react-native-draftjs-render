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

import BlockQuote from './components/BlockQuote';
import DraftJsText from './components/DraftJsText';
import UnorderedListItem from './components/UnorderedListItem';
import OrderedListItem from './components/OrderedListItem';
import generateKey from './utils/generateKey';

type ParamsType = {
  contentState: Object,
  customStyles: Object,
  atomicHandler: Function,
  navigate?: Function,
  orderedListSeparator?: string,
  customBlockHandler?: (Object, ParamsType) => any
};

const getBlocks = (params: ParamsType): ?Array<*> => {
  const {
    contentState,
    customStyles,
    navigate,
    orderedListSeparator,
    customBlockHandler,
  } = params;
  let { atomicHandler } = params;

  if (!contentState.blocks) {
    return null;
  }

  if (typeof atomicHandler === 'undefined') {
    atomicHandler = (item: Object): any => item;
  }

  const counters = {
    'unordered-list-item': {
      count: 0,
      type: 'unordered-list-item',
    },
    'ordered-list-item': {
      count: 0,
      type: 'ordered-list-item',
    },
  };

  function ViewAfterList(): any {
    return <View style={customStyles.viewAfterList} />;
  }

  function checkCounter(counter: Object): any {
    const myCounter = counter;


    // list types
    if (myCounter.count >= 0) {
      if (myCounter.count > 0) {
        myCounter.count = 0;
        return <ViewAfterList key={generateKey()} />;
      }
      return null;
    }

    // non list types
    if (myCounter['unordered-list-item'].count > 0 || myCounter['ordered-list-item'].count > 0) {
      myCounter['unordered-list-item'].count = 0;
      myCounter['ordered-list-item'].count = 0;
      return <ViewAfterList key={generateKey()} />;
    }

    return null;
  }

  return contentState.blocks
    .map((item: Object): any => {
      const itemData = {
        key: item.key,
        text: item.text,
        type: item.type,
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
              />
            </View>
          );
        }

        case 'atomic': {
          const separator = checkCounter(counters);
          if (separator) {
            const atomicView = [];
            atomicView.push(separator);
            atomicView.push(atomicHandler(item));
            return atomicView;
          }
          return atomicHandler(item);
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

module.exports = getBlocks;
