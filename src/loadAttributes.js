/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import { substring, length } from 'stringz';
import React from 'react';
import {
  Text,
  Linking,
} from 'react-native';

import TextStyled from './components/TextStyled';
import defaultStyles from './components/defaultStyles';
import generateKey from './utils/generateKey';
import flatAttributesList from './flatAttributesList';
import getItemType from './helpers/getItemType';

export const getItemOnPress = (item: Object, entityMap: Object, navigate: Function) => {
  if (item.key !== undefined) {
    return () => { navigate(entityMap[item.key].data.url); };
  }
  return undefined;
};

type ParamsType = {
  text: string,
  type: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function,
  textProps: ?Object,
};

const loadAttributes = (params: ParamsType): any => {
  const {
    text,
    customStyles,
    inlineStyles,
    entityRanges,
    entityMap,
    navigate,
    textProps,
    type,
  } = params;

  const defaultNavigationFn = (url: string) => { Linking.openURL(url); };
  const navigateFunction = navigate || defaultNavigationFn;
  const elementList = [];
  let attributes = inlineStyles ? inlineStyles.concat(entityRanges) : entityRanges;
  attributes = attributes.sort((a: Object, b: Object): number => a.offset - b.offset);

  if (attributes.length) {
    const attrs = flatAttributesList(attributes);

    const defaultLineHeight = defaultStyles[type] && defaultStyles[type].lineHeight;
    const customLineHeight = customStyles && customStyles[type] && customStyles[type].lineHeight;
    const lineHeight = { lineHeight: customLineHeight || defaultLineHeight };

    if (attrs[0].offset > 0) {
      const element = (
        <Text style={lineHeight} key={generateKey()} {...textProps}>
          {substring(text, 0, attrs[0].offset)}
        </Text>
      );
      elementList.push(element);
    }

    attrs.forEach((item: Object, index: number) => {
      if (index > 0) {
        const previousItem = attrs[index - 1];
        const offset = previousItem.offset + previousItem.length;
        const subText = substring(text, offset, item.offset);

        if (subText.length) {
          elementList.push(<Text key={generateKey()} {...textProps}>{subText}</Text>);
        }
      }

      const itemType = getItemType(item);
      const itemData = Object.assign({}, {
        key: generateKey(),
        type: itemType,
        text: substring(text, item.offset, item.offset + item.length),
        customStyles,
        textProps,
        lineHeight,
      });

      const itemOnPress = getItemOnPress(item, entityMap, navigateFunction);
      if (itemOnPress !== undefined) Object.assign(itemData, { onPress: itemOnPress });

      elementList.push((
        <TextStyled {...itemData} />
      ));
    });

    const lastItem = attrs[attrs.length - 1];
    const offset = lastItem.offset + lastItem.length;
    const subText = substring(text, offset, length(text));

    if (subText.length) {
      elementList.push(<Text key={generateKey()} {...textProps}>{subText}</Text>);
    }
  } else {
    elementList.push(text);
  }

  return elementList;
};

export default loadAttributes;
