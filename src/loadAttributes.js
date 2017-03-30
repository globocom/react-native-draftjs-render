/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
  Linking,
} from 'react-native';

import TextStyled from './components/TextStyled';
import generateKey from './utils/generateKey';
import flatAttributesList from './flatAttributesList';

const getItemType = (item: Object): string => {
  if (Array.isArray(item.style)) {
    return item.style.map((i: string): string => i.toLowerCase());
  }
  return item.style.toLowerCase();
};

const getItemOnPress = (item: Object, entityMap: Object, navigate: Function) => {
  if (item.key !== undefined) {
    return () => { navigate(entityMap[item.key].data.url); };
  }
  return undefined;
};

const loadAttributes = (
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function): any => {
  let navigateFunction;
  if (navigate) {
    navigateFunction = navigate;
  } else {
    navigateFunction = (url: string) => {
      Linking.openURL(url);
    };
  }
  const elementList = [];
  let attributes = inlineStyles ? inlineStyles.concat(entityRanges) : entityRanges;
  attributes = attributes.sort((a: Object, b: Object): number => a.offset - b.offset);

  if (attributes.length) {
    const attrs = flatAttributesList(attributes);

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
        customStyles,
      });

      const itemOnPress = getItemOnPress(item, entityMap, navigateFunction);
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
  } else {
    elementList.push(text);
  }

  return elementList;
};

export default loadAttributes;
