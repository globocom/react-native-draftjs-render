/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */
import { defaultStylesForTest } from '../../../src/components/defaultStyles';

describe('defaultStyles', () => {
  describe('returns the style for each platform', () => {
    it('android', () => {
      expect(defaultStylesForTest('android')['code-block'].fontFamily).toBe('monospace');
    });

    it('ios', () => {
      expect(defaultStylesForTest('ios')['code-block'].fontFamily).toBe('Courier New');
    });
  });
});
