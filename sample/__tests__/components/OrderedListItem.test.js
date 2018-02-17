/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import OrderedListItem from '../../../src/components/OrderedListItem';

it('renders correctly with a ordered-list-item', () => {
  const text = 'Hello World';
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a ordered-list-item when depth is undefined', () => {
  const text = 'Hello World';
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    depth={undefined}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a ordered-list-item when depth 1', () => {
  const text = 'Hello World';
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    depth={1}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when customStyles is undefined', () => {
  const text = 'Hello World';
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    customStyles={undefined}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders null without a ordered-list-item', () => {
  const tree = renderer.create(<OrderedListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with customStyles', () => {
  const text = 'Hello World';
  const customStyles = {
    'ordered-list-item': {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
      marginLeft: 10,
    },
  };

  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    customStyles={customStyles}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
    navigate={() => null}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle.orderedListItemContainer', () => {
  const text = 'Hello World';
  const customStyles = {
    'ordered-list-item': {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
      marginLeft: 10,
    },
    orderedListItemContainer: {
      flex: 2,
    },
  };
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    customStyles={customStyles}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
    navigate={() => null}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle.orderedListItemNumber', () => {
  const text = 'Hello World';
  const customStyles = {
    'ordered-list-item': {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
      marginLeft: 10,
    },
    orderedListItemNumber: {
      fontSize: 14,
    },
  };
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    customStyles={customStyles}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
    navigate={() => null}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when orderedListItemNumber.marginLeft is set', () => {
  const text = 'Hello World';
  const customStyles = {
    'ordered-list-item': {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
      marginLeft: 10,
    },
    orderedListItemNumber: {
      marginLeft: 14,
    },
  };
  const tree = renderer.create(<OrderedListItem
    type="ordered-list-item"
    text={text}
    customStyles={customStyles}
    inlineStyles={[]}
    entityRanges={[]}
    entityMap={{}}
    navigate={() => null}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
