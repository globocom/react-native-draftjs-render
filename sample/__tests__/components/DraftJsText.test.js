/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import DraftJsText from '../../../src/components/DraftJsText';

it('renders correctly with a text', () => {
  const text = 'Hello World';
  const tree = renderer.create(
    <DraftJsText
      type="paragraph"
      text={text}
      inlineStyles={[]}
      entityRanges={[]}
      entityMap={{}}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders null without a text', () => {
  const tree = renderer.create(
    <DraftJsText />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle', () => {
  const text = 'Hello World';
  const customStyles = {
    paragraph: {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
    },
  };
  const tree = renderer.create(
    <DraftJsText
      type="paragraph"
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

it('extends a style with a customStyle from another type', () => {
  const text = 'Hello World';
  const customStyles = {
    blockquote: {
      fontSize: 18,
      fontWeight: 'normal',
      letterSpacing: -0.75,
      lineHeight: 32,
    },
  };
  const tree = renderer.create(
    <DraftJsText
      type="paragraph"
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
