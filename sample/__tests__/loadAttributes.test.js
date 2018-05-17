/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import loadAttributes, { getItemOnPress } from '../../src/loadAttributes';

describe('getItemOnPress()', () => {
  test('returns the right function', () => {
    const navigate = jest.fn();
    const resultFn = getItemOnPress(
      { key: 'test' },
      { test: { data: { url: 'http://ok' } } },
      navigate,
    );
    resultFn();
    expect(navigate.mock.calls.length).toBe(1);
  });

  test('returns the right function', () => {
    expect(getItemOnPress({})).toBe();
  });
});

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
  const typeOfFunc = typeof result[0].props.onPress;
  expect(typeOfFunc).toBe('function');
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
      {
        offset: 7,
        length: 3,
        style: 'LINK',
      },
    ],
    entityMap: {
      0: {
        type: 'LINK',
        mutability: 'MUTABLE',
        data: {
          url: 'https://github.com/globocom/react-native-draftjs-render',
        },
      },
    },
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(5);
  expect(result[4].props.children).toBe('d Hello World Hello World');
});

it('have correct length with multiple inlineStyles and text with substring without style', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 300,
      length: 2,
      style: 'BOLD',
    }],
    entityMap: {},
    entityRanges: [],
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);
  expect(result[0].props.children).toBe(params.text);
});

it('have inlineStyles with substring and type is given', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 300,
      length: 2,
      style: 'BOLD',
    }],
    entityMap: {},
    entityRanges: [],
    type: 'unstyled',
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);
  expect(result[0].props.children).toBe(params.text);
});


it('have inlineStyles with substring and type is given with proper customStyles to that type', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 300,
      length: 2,
      style: 'BOLD',
    }],
    entityMap: {},
    entityRanges: [],
    type: 'unstyled',
    customStyles: {
      unstyled: {
        lineHeight: 30,
      },
    },
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);
  expect(result[0].props.children).toBe(params.text);
});

it('have inlineStyles with substring and type is given without proper customStyles to that type', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 300,
      length: 2,
      style: 'BOLD',
    }],
    entityMap: {},
    entityRanges: [],
    type: 'unstyled',
    customStyles: {
      other: {
        lineHeight: 30,
      },
    },
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);
  expect(result[0].props.children).toBe(params.text);
});

it('have inlineStyles with substring and type is given without lineHeight customStyles to that type', () => {
  const params = {
    text: 'Hello World Hello World Hello World',
    inlineStyles: [{
      offset: 300,
      length: 2,
      style: 'BOLD',
    }],
    entityMap: {},
    entityRanges: [],
    type: 'unstyled',
    customStyles: {
      unstyled: {
        fontSize: 30,
      },
    },
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);
  expect(result[0].props.children).toBe(params.text);
});

it('have entityRanges but undefined entityMap', () => {
  const params = {
    text: 'Hello World',
    inlineStyles: [],
    entityMap: undefined,
    entityRanges: [{
      offset: 0,
      length: 5,
      key: 0,
    }],
    type: 'unstyled',
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);

  const typeOfFunc = typeof result[0].props.onPress;
  expect(typeOfFunc).toBe('undefined');
});

it('have entityRanges but empty object entityMap', () => {
  const params = {
    text: 'Hello World',
    inlineStyles: [],
    entityMap: {},
    entityRanges: [{
      offset: 0,
      length: 5,
      key: 0,
    }],
    type: 'unstyled',
  };
  const result = loadAttributes(params);
  expect(result).toHaveLength(2);

  const typeOfFunc = typeof result[0].props.onPress;
  expect(typeOfFunc).toBe('undefined');
});
