/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import getItemType from '../../../src/helpers/getItemType';

it('returns empty string if object doesnt have style attribute', () => {
  const mock = {};
  const result = getItemType(mock);
  expect(result).toEqual('');
});

it('returns lowercase if style exists but item isnt an array', () => {
  const mock = { style: 'LINK' };
  const result = getItemType(mock);
  expect(result).toEqual('link');
});

it('returns lowercase array if style exists but item is an array', () => {
  const mock = { style: ['LINK', 'BOLD'] };
  const result = getItemType(mock);
  expect(result).toEqual(['link', 'bold']);
});
