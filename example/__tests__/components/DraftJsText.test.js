import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import DraftJsText from '../../../src/components/DraftJsText';

it('renders correctly with a text', () => {
  const text = 'Hello World';
  const tree = renderer.create(
    <DraftJsText
      text={text}
      inlineStyles={[]}
      entityRanges={[]}
      entityMap={{}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders null without a text', () => {
  const tree = renderer.create(
    <DraftJsText />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('extends a style with a customStyle', () => {
  const text = 'Hello World';
  const customStyle = {
    fontSize: 18,
    fontWeight: 'normal',
    letterSpacing: -0.75,
    lineHeight: 32,
  };
  const tree = renderer.create(
    <DraftJsText
      text={text}
      customStyle={customStyle}
      inlineStyles={[]}
      entityRanges={[]}
      entityMap={{}}
      navigate={() => null}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
