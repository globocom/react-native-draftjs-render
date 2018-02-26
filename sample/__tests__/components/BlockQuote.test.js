/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import BlockQuote from '../../../src/components/BlockQuote';

it('renders correctly with a blockquote', () => {
  const text = 'Hello World';
  const tree = renderer.create(<BlockQuote
    type="blockquote"
    text={text}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders null without a blockquote', () => {
  const tree = renderer.create(<BlockQuote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle', () => {
  const text = 'Hello World';
  const customStyles = {
    blockquote: {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
    },
  };
  const tree = renderer.create(<BlockQuote
    type="blockquote"
    text={text}
    customStyles={customStyles}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
    navigate={() => null}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
