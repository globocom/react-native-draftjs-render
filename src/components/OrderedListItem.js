/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import DraftJsText from '../components/DraftJsText';

import type { OrderedListItemPropsType } from './defaultProps';

const styles = StyleSheet.create({
  orderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderedListItemNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8,
    alignSelf: 'center',
  },
});

const OrderedListItem = (props: OrderedListItemPropsType): any => {
  const {
    counter,
    separator,
  } = props;


  const orderedListItemCustomStyleContainer = props.customStyles ?
    props.customStyles.orderedListItemContainer :
    undefined;

  const orderedListItemCustomStyleNumber = props.customStyles ?
    props.customStyles.orderedListItemNumber :
    undefined;

  let marginLeft = 0;
  marginLeft =
      orderedListItemCustomStyleNumber && orderedListItemCustomStyleNumber.marginLeft ?
        props.depth * orderedListItemCustomStyleNumber.marginLeft :
        props.depth * props.defaultMarginLeft;

  return (
    <View style={[styles.orderedListItemContainer, orderedListItemCustomStyleContainer]}>
      <Text
        style={[styles.orderedListItemNumber, orderedListItemCustomStyleNumber,
          { marginLeft }]}
      >
        {counter}{separator}
      </Text>
      <DraftJsText
        {...props}
      />
    </View>);
};

OrderedListItem.defaultProps = {
  counter: 1,
  depth: 0,
  separator: '.',
  defaultMarginLeft: 7,
};

export default OrderedListItem;
