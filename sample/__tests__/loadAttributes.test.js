/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import loadAttributes from '../../src/loadAttributes';

it('returns only text if other objects are empty', () => {
  const params = {
    text: 'Hello World',
    inlineStyles: [],
    entityMap: {},
    entityRanges: [],
  };
  const mock = ['Hello World'];
  const result = loadAttributes(params);
  expect(result).toEqual(mock);
});

it('still works with no inlineStyles object', () => {
  const params = {
    text: 'Hello World',
    entityMap: {},
    entityRanges: [],
  };
  const mock = ['Hello World'];
  const result = loadAttributes(params);
  expect(result).toEqual(mock);
});

it('have correct length with inlineStyles and text', () => {
  const params = {
    text: 'Hello World',
    inlineStyles: [
      {
        offset: 2,
        length: 5,
        style: 'BOLD',
      },
    ],
    entityMap: {},
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(3);
});

it('have correct length with inlineStyles and text width astral symbols', () => {
  const params = {
    text: 'Iñtërnâtiônàlizætiøn☃💩 Etiama nisi augue ultricie qa magna',
    inlineStyles: [
      {
        offset: 4,
        length: 35,
        style: 'BOLD',
      },
    ],
    entityMap: {},
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(3);
});

it('have correct length with multiple inlineStyles and text', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [
      {
        offset: 2,
        length: 5,
        style: 'BOLD',
      },
      {
        offset: 6,
        length: 3,
        style: 'ITALIC',
      },
    ],
    entityMap: {},
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(5);
});

it('have correct length with inlineStyles, entityMap and text', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 2,
      length: 5,
      style: 'BOLD',
    }],
    entityMap: {
      0: {
        type: 'LINK',
        mutability: 'MUTABLE',
        data: {
          url: 'https://github.com/globocom/react-native-draftjs-render',
        },
      },
    },
    entityRanges: [{
      offset: 0,
      length: 5,
      key: 0,
    }],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(4);
});

it('have correct length with multiple inlineStyles and text with substring without style', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [
      {
        offset: 2,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 7,
        length: 3,
        style: 'ITALIC',
      },
    ],
    entityMap: {},
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(5);
});
