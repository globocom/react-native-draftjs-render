/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import DraftJsText from './DraftJsText';
import type { UnorderedListItemPropsType } from './types';

const styles = StyleSheet.create({
  unorderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 8
  },
  unorderedListItemBullet: {
    marginRight: 8,
  },
});

const UnorderedListItem = (props: UnorderedListItemPropsType): any => {
  const { customStyles, depth, defaultMarginLeft } = props;
  const unorderedListItemCustomStyleContainer = customStyles
    ? customStyles.unorderedListItemContainer
    : undefined;

  const unorderedListItemCustomStyleBullet = customStyles
    ? customStyles.unorderedListItemBullet
    : undefined;

  let marginLeft = 0;
  marginLeft = unorderedListItemCustomStyleBullet && unorderedListItemCustomStyleBullet.marginLeft
    ? depth * unorderedListItemCustomStyleBullet.marginLeft
    : depth * defaultMarginLeft;

  const renderBulletFormat = () => {
    const BULET_FORMATS = [0x2022, 0x25E6, 0x2B29, 0x2B29, 0x2B29];

    return (
      <Text style={[styles.unorderedListItemBullet, unorderedListItemCustomStyleBullet,
        { marginLeft }]}
      >
        {String.fromCharCode(BULET_FORMATS[depth % 5])}
      </Text>
    );
  }

  return (
    <View style={[styles.unorderedListItemContainer, unorderedListItemCustomStyleContainer]}>
      {renderBulletFormat()}
      <DraftJsText
        {...props}
      />
    </View>
  );
};

UnorderedListItem.defaultProps = {
  defaultMarginLeft: 8,
  depth: 0,
};

export default UnorderedListItem;
