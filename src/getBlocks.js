// @flow

import React from 'react';

import Paragraph from './components/Paragraph';

function getBlocks(bodyData: Object = {}, customStyles: Object = {}): ?React$Element<*> {
  if (!bodyData.blocks) {
    return null;
  }

  return bodyData.blocks
    .map((item: Object): any => {
      switch (item.type) {
        case 'unstyled':
        // case 'paragraph':
          return <Paragraph key={item.key} text={item.text} customStyle={customStyles.unstyled} />;

        default:
          return null;
      }
    });
}

module.exports = getBlocks;
