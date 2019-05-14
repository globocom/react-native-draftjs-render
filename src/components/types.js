/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

export type BlockQuotePropsType = {
  type: string,
  text: string,
  data: Object,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: ?Object,
  textProps: ?Object,
  renderEmptyBlocks: boolean,
};

export type DraftJsTextPropsType = {
  type: string,
  text: string,
  data: Object,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: ?Object,
  navigate?: Function,
  textProps: ?Object,
  renderEmptyBlocks: boolean,
};

export type OrderedListItemPropsType = {
  type: string,
  text: string,
  data: Object,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: ?Object,
  counter: number,
  separator?: string,
  depth: number,
  defaultMarginLeft: number,
  textProps: ?Object,
  renderEmptyBlocks: boolean,
};

export type UnorderedListItemPropsType = {
  type: string,
  text: string,
  data: Object,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: ?Object,
  depth: number,
  defaultMarginLeft: number,
  textProps: ?Object,
  renderEmptyBlocks: boolean,
};

export type TextStyledPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  onPress?: Function,
  lineHeight: Object,
};
