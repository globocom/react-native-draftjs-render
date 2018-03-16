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
} from 'react-native';

import DraftJsText from '../components/DraftJsText';

import type { UnorderedListItemPropsType } from './types';

const styles = StyleSheet.create({
  unorderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unorderedListItemBullet: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginRight: 8,
    alignSelf: 'center',
    backgroundColor: 'black',
  },
});

const UnorderedListItem = (props: UnorderedListItemPropsType): any => {
  const unorderedListItemCustomStyleContainer = props.customStyles ?
    props.customStyles.unorderedListItemContainer :
    undefined;

  const unorderedListItemCustomStyleBullet = props.customStyles ?
    props.customStyles.unorderedListItemBullet :
    undefined;

  let marginLeft = 0;
  marginLeft =
      unorderedListItemCustomStyleBullet && unorderedListItemCustomStyleBullet.marginLeft ?
        props.depth * unorderedListItemCustomStyleBullet.marginLeft :
        props.depth * props.defaultMarginLeft;

  return (
    <View style={[styles.unorderedListItemContainer, unorderedListItemCustomStyleContainer]}>
      <View style={[styles.unorderedListItemBullet, unorderedListItemCustomStyleBullet,
        { marginLeft }]}
      />
      <DraftJsText
        {...props}
      />
    </View>);
};

UnorderedListItem.defaultProps = {
  defaultMarginLeft: 8,
  depth: 0,
};

export default UnorderedListItem;
