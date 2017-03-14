// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

import TextStyled from './components/TextStyled';
import generateKey from './utils/generateKey';

function flatAttributes(attrsList: Array<Object>): Array<Object> {
  attrsList.reduce((previous: Object, current: Object, index: number): Object => {
    if (previous.offset === current.offset) {
      Object.assign(previous, current);
      attrsList.splice(index, 1);
      return previous;
    } else { // eslint-disable-line no-else-return
      return current;
    }
  });
  return attrsList;
}

function getItemType(item: Object): string {
  if (item.key !== undefined) return 'link';
  if (item.style) return item.style.toLowerCase();
  return '';
}

function getItemOnPress(item: Object, entityMap: Object, navigate: Function) {
  if (item.key !== undefined) return () => { navigate(entityMap[item.key].data.url); };
  return undefined;
}

function loadAttributes(
  text: string,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate: Function): any {
  const elementList = [];
  let attributes = inlineStyles ? inlineStyles.concat(entityRanges) : entityRanges;
  attributes = attributes.sort((a: Object, b: Object): number => a.offset - b.offset);

  if (attributes.length) {
    const attrs = flatAttributes(attributes);

    if (attrs[0].offset > 0) {
      elementList.push(<Text key={generateKey()}>{text.substring(0, attrs[0].offset)}</Text>);
    }

    attrs.forEach((item: Object, index: number) => {
      if (index > 0) {
        const previousItem = attrs[index - 1];
        const offset = previousItem.offset + previousItem.length;
        const subText = text.substring(offset, item.offset);

        if (subText.length) {
          elementList.push(<Text key={generateKey()}>{subText}</Text>);
        }
      }

      const itemType = getItemType(item);
      const itemData = Object.assign({}, {
        key: generateKey(),
        type: itemType,
        text: text.substring(item.offset, item.offset + item.length),
      });

      const itemOnPress = getItemOnPress(item, entityMap, navigate);
      if (itemOnPress !== undefined) Object.assign(itemData, { onPress: itemOnPress });

      elementList.push((
        <TextStyled {...itemData} />
      ));
    });

    const lastItem = attrs[attrs.length - 1];
    const offset = lastItem.offset + lastItem.length;
    const subText = text.substring(offset, text.length);

    if (subText.length) {
      elementList.push(<Text key={generateKey()}>{subText}</Text>);
    }
  }

  return elementList;
}

export default loadAttributes;
