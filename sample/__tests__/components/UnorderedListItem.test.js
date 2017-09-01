/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import UnorderedListItem from '../../../src/components/UnorderedListItem';

it('renders correctly with a unordered-list-item', () => {
  const text = 'Hello World';
  const tree = renderer.create(
    <UnorderedListItem
      type="unordered-list-item"
      text={text}
      inlineStyles={[]}
      entityRanges={[]}
      entityMap={{}}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders null without a unordered-list-item', () => {
  const tree = renderer.create(
    <UnorderedListItem />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle', () => {
  const text = 'Hello World';
  const customStyles = {
    'unordered-list-item': {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
    },
  };
  const tree = renderer.create(
    <UnorderedListItem
      type="unordered-list-item"
      text={text}
      customStyles={customStyles}
      inlineStyles={[]}
      entityRanges={[]}
      entityMap={{}}
      navigate={() => null}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
