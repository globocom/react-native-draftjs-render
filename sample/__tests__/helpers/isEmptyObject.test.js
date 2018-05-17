/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import isEmptyObject from '../../../src/helpers/isEmptyObject';

it('returns true if object is empty', () => {
  const mock = {};
  const result = isEmptyObject(mock);
  expect(result).toEqual(true);
});

it('returns false if object is empty', () => {
  const mock = { a: 1 };
  const result = isEmptyObject(mock);
  expect(result).toEqual(false);
});
