// @flow

import React from 'react';

import DraftJsText from './components/DraftJsText';

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

        default:
          return null;
      }
    });
};

module.exports = getBlocks;
