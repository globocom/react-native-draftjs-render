/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

const getNewStyle = (prev: any, current: string): Array<string> => {
  if (Array.isArray(prev)) {
    prev.push(current);
    return prev;
  }
  return [prev, current];
};

const combineItems = (previous: Object, current: Object): Object => {
  let newStyle;
  let newItem = previous;

  if (previous.style && current.style) {
    newStyle = getNewStyle(previous.style, current.style);
  } else {
    newStyle = getNewStyle(previous.style, 'link');
    newItem = Object.assign(previous, current);
  }

  newItem.style = newStyle;
  return newItem;
};

const flatAttributesList = (attrsList: Array<Object>): Array<Object> => {
  const newAttrsList = [attrsList[0]];
  attrsList.reduce((previous: Object, current: Object): Object => {
    if (previous.offset === current.offset) {
      const newItem = combineItems(previous, current);
      newAttrsList[newAttrsList.length - 1] = newItem;
      return previous;
    }
    newAttrsList.push(current);
    return current;
  });
  return newAttrsList;
};

export default flatAttributesList;
