/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import flatAttributesList from '../../src/flatAttributesList';

describe('only inlineStyleRanges', () => {
  it('one style doesnt change anything', () => {
    const mock = [{
      style: 'BOLD',
      offset: 0,
      length: 15,
    }];
    const result = flatAttributesList(mock);
    expect(result).toEqual(mock);
  });

  it('two styles in the same range become one item with an array of styles', () => {
    const mock = [{
      style: 'BOLD',
      offset: 0,
      length: 15,
    },
    {
      style: 'ITALIC',
      offset: 0,
      length: 15,
    },
    {
      style: 'UNDERLINE',
      offset: 12,
      length: 24,
    }];
    const result = flatAttributesList(mock);
    const expected = [{
      style: ['BOLD', 'ITALIC'],
      offset: 0,
      length: 12,
    },
    {
      style: ['BOLD', 'ITALIC', 'UNDERLINE'],
      offset: 12,
      length: 3,
    },
    {
      style: 'UNDERLINE',
      offset: 15,
      length: 21,
    }];
    expect(result).toEqual(expected);
  });
});

describe('only entityRanges', () => {
  it('links doesnt change offset but receive link style', () => {
    const mock = [{
      key: 0,
      offset: 0,
      length: 15,
    },
    {
      key: 1,
      offset: 56,
      length: 60,
    }];
    const expected = [{
      key: 0,
      offset: 0,
      length: 15,
      style: 'link',
    },
    {
      key: 1,
      offset: 56,
      length: 60,
      style: 'link',
    }];
    const result = flatAttributesList(mock);
    expect(result).toEqual(expected);
  });
});

describe('with inlineStyleRanges and entityRanges', () => {
  it('a style and a link in the same range merge into one object', () => {
    const mock = [{
      style: 'ITALIC',
      offset: 0,
      length: 15,
    },
    {
      key: 0,
      offset: 0,
      length: 15,
    }];
    const result = flatAttributesList(mock);
    const expected = [{
      key: 0,
      style: ['ITALIC', 'link'],
      offset: 0,
      length: 15,
    }];
    expect(result).toEqual(expected);
  });

  it('two styles and a link in the same range merge into one object', () => {
    const mock = [{
      style: 'ITALIC',
      offset: 0,
      length: 15,
    },
    {
      style: 'STRIKETHROUGH',
      offset: 0,
      length: 15,
    },
    {
      key: 0,
      offset: 0,
      length: 15,
    }];
    const result = flatAttributesList(mock);
    const expected = [{
      key: 0,
      style: ['ITALIC', 'STRIKETHROUGH', 'link'],
      offset: 0,
      length: 15,
    }];
    expect(result).toEqual(expected);
  });
});
