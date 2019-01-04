/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

const sortInteger = (a: number, b: number): number => a - b;
const isLink = (element: Object): boolean => Object.prototype.hasOwnProperty.call(element, 'key');

const convertStylesIntoNumbers = (styles: Array<Object>): Array<number> => {
  const numbers = [];
  styles.forEach((style: Object) => {
    numbers.push(style.offset);
    numbers.push(style.offset + style.length);
  });
  return numbers;
};

const createArrayWithSegments = (numbersList: Array<number>): Array<Array<number>> => {
  const segmentList = [];
  const numbersListLength = numbersList.length;
  for (let i = 0; i < numbersListLength - 1; i += 1) {
    segmentList.push([numbersList[i], numbersList[i + 1] - numbersList[i]]);
  }
  return segmentList;
};

const addTypeToSegments = (
  segments: Array<Array<number>>,
  originalStyles: Array<Object>,
): Array<Object> => {
  const objectList = [];
  segments.forEach((segment: Array<number>) => {
    const types = [];
    originalStyles.forEach((style: Object) => {
      const length = segment[0] + segment[1];
      if (length > style.offset && length <= style.offset + style.length) {
        if (isLink(style)) {
          types.push('link');
          segment.push(style.key);
        } else {
          types.push(style.style);
        }
      }
    });
    if (types.length) {
      const attr = Object.assign({}, { offset: segment[0], length: segment[1] });
      const t = types.length === 1 ? types[0] : types;
      Object.assign(attr, { style: t });
      if (segment.length === 3) Object.assign(attr, { key: segment[2] });
      objectList.push(attr);
    }
  });
  return objectList;
};

const isOverlap = (styles: Array<Object>): any => {
  let found;
  for (let i = 0; i < styles.length - 1; i += 1) {
    found = styles
      .find((item: Object): boolean => (
        item.offset >= styles[i].offset && item.offset <= styles[i].offset + styles[i].length));
    if (found) break;
  }
  return found;
};

const checkSingleLinkElement = (item: Object) => {
  if (isLink(item)) {
    Object.assign(item, { style: 'link' });
  }
};

const flatAttributesList = (attrsList: Array<Object>): Array<Object> => {
  if (attrsList.length === 1 || !isOverlap(attrsList)) {
    checkSingleLinkElement(attrsList[0]);
    return attrsList;
  }
  const numbersList = convertStylesIntoNumbers(attrsList);
  const sortedNumbersList = numbersList.sort(sortInteger);
  const uniqueSortedNumbersList = Array.from(new Set(sortedNumbersList));
  const segments = createArrayWithSegments(uniqueSortedNumbersList);
  const finalObject = addTypeToSegments(segments, attrsList);
  return finalObject;
};

export default flatAttributesList;
