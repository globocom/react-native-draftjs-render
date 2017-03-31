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
