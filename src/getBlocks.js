// @flow

import React from 'react';

import BlockQuote from './components/BlockQuote';
import DraftJsText from './components/DraftJsText';
import UnorderedListItem from './components/UnorderedListItem';

const getBlocks = (
  bodyData: Object = {},
  customStyles: Object = {},
  atomicHandler: Function,
  navigate?: Function): ?React$Element<*> => {
  if (!bodyData.blocks) {
    return null;
  }

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
          return (
            <DraftJsText
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);
        case 'atomic':
          return atomicHandler(item);
        case 'blockquote':
          return <BlockQuote {...itemData} />;
        case 'unordered-list-item':
          return (
            <UnorderedListItem
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyles={customStyles}
              navigate={navigate}
            />);

        default:
          return null;
      }
    });
};

module.exports = getBlocks;
