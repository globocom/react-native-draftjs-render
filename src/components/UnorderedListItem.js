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

const UnorderedListItem = (props: Object): any => {
  const unorderedListItemCustomStyleContainer = props.customStyles ?
    props.customStyles.unorderedListItemContainer :
    undefined;

  const unorderedListItemCustomStyleBullet = props.customStyles ?
    props.customStyles.unorderedListItemBullet :
    undefined;

  return (
    <View style={[styles.unorderedListItemContainer, unorderedListItemCustomStyleContainer]}>
      <View style={[styles.unorderedListItemBullet, unorderedListItemCustomStyleBullet]} />
      <DraftJsText
        {...props}
      />
    </View>);
};

UnorderedListItem.propTypes = {
  customStyles: React.PropTypes.any,
};

UnorderedListItem.defaultProps = {
  customStyles: {},
};

export default UnorderedListItem;
