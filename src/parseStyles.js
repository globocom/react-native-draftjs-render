// @flow

import React from 'react';

import TextStyled from './components/TextStyled';

function parseStyles(text: string, inlineStyles: Array<Object>): any {
  let element;
  inlineStyles.map((item: Object): Object => {
    const newItem = item;

    newItem.element = (
      <TextStyled
        type={item.style.toLowerCase()}
        text={text.substring(item.offset, item.offset + item.length)}
      />
    );

    return newItem;
  });
  return element;
}

export default parseStyles;
