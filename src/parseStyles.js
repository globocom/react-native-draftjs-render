// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

import TextStyled from './components/TextStyled';

function parseStyles(text: string, inlineStyles: Array<Object>): any {
  const elementList = [];

  if (inlineStyles[0].offset > 0) {
    elementList.push(<Text key="mykey">{text.substring(0, inlineStyles[0].offset)}</Text>);
  }

  inlineStyles.forEach((item: Object, index: Number): Object => {
    if (index > 0) {
      const offset = inlineStyles[index - 1].offset + inlineStyles[index - 1].length;
      const subText = text.substring(offset, item.offset);

      if (subText.length) {
        elementList.push(<Text key={`mykey${offset}${item.offset}`}>{subText}</Text>);
      }
    }

    elementList.push((
      <TextStyled
        key={`mykey${item.offset}`}
        type={item.style ? item.style.toLowerCase() : undefined}
        text={text.substring(item.offset, item.offset + item.length)}
      />
    ));
  });

  const lastItem = inlineStyles[inlineStyles.length - 1];

  const offset = lastItem.offset + lastItem.length;
  const subText = text.substring(offset, text.length);

  if (subText.length) {
    elementList.push(<Text key={`mykey${offset}${lastItem.offset}`}>{subText}</Text>);
  }

  return elementList;
}

export default parseStyles;
