// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

import TextStyled from './components/TextStyled';
import generateKey from './utils/generateKey';

function parseStyles(text: string, inlineStyles: Array<Object>): any {
  const elementList = [];

  if (inlineStyles[0].offset > 0) {
    elementList.push(<Text key={generateKey()}>{text.substring(0, inlineStyles[0].offset)}</Text>);
  }

  inlineStyles.forEach((item: Object, index: number) => {
    if (index > 0) {
      const previousItem = inlineStyles[index - 1];
      const offset = previousItem.offset + previousItem.length;
      const subText = text.substring(offset, item.offset);

      if (subText.length) {
        elementList.push(<Text key={generateKey()}>{subText}</Text>);
      }
    }

    elementList.push((
      <TextStyled
        key={generateKey()}
        type={item.style ? item.style.toLowerCase() : ''}
        text={text.substring(item.offset, item.offset + item.length)}
      />
    ));
  });

  const lastItem = inlineStyles[inlineStyles.length - 1];
  const offset = lastItem.offset + lastItem.length;
  const subText = text.substring(offset, text.length);

  if (subText.length) {
    elementList.push(<Text key={generateKey()}>{subText}</Text>);
  }

  return elementList;
}

export default parseStyles;
