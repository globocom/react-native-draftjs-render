// @flow

import React from 'react';

import Paragraph from './components/Paragraph';
import Header from './components/Header';

const getBlocks = (
  bodyData: Object = {},
  customStyles: Object = {},
  atomicHandler: Function,
  navigate: Function): ?React$Element<*> => {
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
          return (
            <Paragraph
              {...itemData}
              entityMap={bodyData.entityMap}
              customStyle={customStyles.unstyled}
              navigate={navigate}
            />);
        case 'header-one':
        case 'header-two':
        case 'header-three':
        case 'header-four':
        case 'header-five':
        case 'header-six':
          return (
            <Header
              {...itemData}
              customStyle={customStyles[item.type]}
            />);
        case 'atomic':
          return atomicHandler(item);

        default:
          return null;
      }
    });
};

module.exports = getBlocks;
