// @flow

import React from 'react';

import BlockQuote from './components/BlockQuote';
import DraftJsText from './components/DraftJsText';
import UnorderedListItem from './components/UnorderedListItem';
import OrderedListItem from './components/OrderedListItem';

const getBlocks = (
  bodyData: Object = {},
  customStyles: Object = {},
  atomicHandler: Function,
  navigate?: Function,
  orderedListSeparator?: String): ?React$Element<*> => {
  if (!bodyData.blocks) {
    return null;
  }

  let ordererCounter = 0;
  return bodyData.blocks
    .map((item: Object): any => {
      const itemData = {
        key: item.key,
        text: item.text,
        type: item.type,
        inlineStyles: item.inlineStyleRanges,
        entityRanges: item.entityRanges,
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
        case 'code-block':
          ordererCounter = 0;
          return (
            <DraftJsText
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);
        case 'atomic':
          ordererCounter = 0;
          return atomicHandler(item);
        case 'blockquote':
          ordererCounter = 0;
          return (
            <BlockQuote
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);
        case 'unordered-list-item':
          ordererCounter = 0;
          return (
            <UnorderedListItem
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);
        case 'ordered-list-item':
          ordererCounter += 1;
          return (
            <OrderedListItem
              {...itemData}
              separator={orderedListSeparator}
              counter={ordererCounter}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);

        default:
          ordererCounter = 0;
          return null;
      }
    });
};

module.exports = getBlocks;
