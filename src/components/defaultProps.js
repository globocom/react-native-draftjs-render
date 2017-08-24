/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

export type BlockQuotePropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
};

export type DraftJsTextPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function,
};

export type OrderedListItemPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  counter: number,
  separator?: string,
};

export type UnorderedListItemPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
};

export type TextStyledPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  onPress?: Function,
};
