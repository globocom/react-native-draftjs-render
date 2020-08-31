import React from 'react';
import { Linking, Text, TextProps } from 'react-native';
import { length, substring } from 'stringz';

import defaultStyles from './components/defaultStyles';
import TextStyled from './components/TextStyled';
import flatAttributesList from './flatAttributesList';
import generateKey from './generateKey';
import getItemType from './getItemType';
import {
  Attribute,
  BlockType,
  CustomStyles,
  EntityMap,
  EntityRange,
  InlineStyleRange,
  InlineType,
  RawInlineStyle,
} from './typings';

async function defaultNavigationFn(url: string): Promise<void> {
  return await Linking.openURL(url);
}

export function getItemOnPress(
  item: InlineStyleRange,
  entityMap: EntityMap | undefined,
  navigate: (url: string) => Promise<void>,
) {
  if (item.key === undefined) return undefined;
  if (!entityMap) return undefined;
  if (Object.keys(entityMap).length === 0) return undefined;
  return () => navigate(entityMap?.[item?.key || '']?.data?.url);
}

interface ParamsType {
  text: string;
  type: string;
  customStyles?: CustomStyles;
  inlineStyleRanges: RawInlineStyle[];
  entityRanges: EntityRange[];
  entityMap?: EntityMap;
  navigate?: (url: string) => Promise<void>;
  textProps?: TextProps;
}

export default function loadAttributes(params: ParamsType): (string | JSX.Element)[] {
  const { text, customStyles, inlineStyleRanges, entityRanges, entityMap, navigate, textProps, type } = params;

  const safeInlineStyleRanges = Array.isArray(inlineStyleRanges) ? inlineStyleRanges : [];
  const safeEntityRanges = Array.isArray(entityRanges) ? entityRanges : [];

  const attributes: Attribute[] = [...safeInlineStyleRanges, ...safeEntityRanges];
  if (attributes.length === 0) return [text];

  const elementList: JSX.Element[] = [];
  const flattenStyles = flatAttributesList(attributes.sort((a, b): number => a.offset - b.offset));
  const lineHeight = {
    lineHeight: customStyles?.[type as InlineType]?.lineHeight || defaultStyles?.[type as BlockType]?.lineHeight,
  };

  if (flattenStyles[0].offset > 0) {
    elementList.push(
      <Text style={lineHeight} key={generateKey()} {...textProps}>
        {substring(text, 0, flattenStyles[0].offset)}
      </Text>,
    );
  }

  flattenStyles.forEach((item, index) => {
    if (index > 0) {
      const previousItem = flattenStyles[index - 1];
      const offset = previousItem.offset + previousItem.length;
      const subText = substring(text, offset, item.offset);

      if (subText.length) {
        elementList.push(
          <Text key={generateKey()} {...textProps}>
            {subText}
          </Text>,
        );
      }
    }

    elementList.push(
      <TextStyled
        key={generateKey()}
        type={getItemType(item)}
        text={substring(text, item.offset, item.offset + item.length)}
        customStyles={customStyles}
        textProps={textProps}
        lineHeight={lineHeight}
        onPress={getItemOnPress(item, entityMap, navigate || defaultNavigationFn)}
      />,
    );
  });

  const lastItem = flattenStyles[flattenStyles.length - 1];
  const offset = lastItem.offset + lastItem.length;
  const subText = substring(text, offset, length(text));

  if (subText.length) {
    elementList.push(
      <Text key={generateKey()} {...textProps}>
        {subText}
      </Text>,
    );
  }

  return elementList;
}
