/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import TextStyled from '../../../src/components/TextStyled';

it('renders correctly without onPress', () => {
  const tree = renderer.create(
    <TextStyled
      type="paragraph"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with onPress', () => {
  const tree = renderer.create(
    <TextStyled
      type="paragraph"
      onPress={() => null}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with customStyles and multiple types', () => {
  const customStyles = {
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    link: {
      textDecorationLine: 'underline',
    },
    underline: {
      textDecorationLine: 'underline',
    },
    strikethrough: {
      textDecorationLine: 'line-through',
    },
  };
  const typeArray = ['bold', 'italic'];
  const tree = renderer.create(
    <TextStyled
      type={typeArray}
      customStyles={customStyles}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with customStyles and single type', () => {
  const customStyles = {
    bold: {
      fontWeight: 'bold',
    },
  };
  const type = 'bold';
  const tree = renderer.create(
    <TextStyled
      type={type}
      customStyles={customStyles}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
