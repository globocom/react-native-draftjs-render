// @flow

import React from 'react';

import Paragraph from './components/Paragraph';
import Header from './components/Header';

function getBlocks(bodyData: Object = {},
  customStyles: Object = {},
  atomicHandler: Function): ?React$Element<*> {
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
      };

      switch (item.type) {
        case 'unstyled':
        case 'paragraph':
          return <Paragraph {...itemData} customStyle={customStyles.unstyled} />;
        case 'header-one':
        case 'header-two':
        case 'header-three':
        case 'header-four':
        case 'header-five':
        case 'header-six':
          return <Header {...itemData} customStyle={customStyles[item.type]} />;
        case 'atomic':
          return atomicHandler(item);

        default:
          return null;
      }
    });
}

module.exports = getBlocks;
