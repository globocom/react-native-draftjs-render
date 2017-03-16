import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import RNDraftJSRender from '../../index';
import data from '../src/resourceMock.json';

it('renders correctly with contentState', () => {
  const tree = renderer.create(
    <RNDraftJSRender contentState={data} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with contentState and customStyle', () => {
  const customStyles = {
    unstyled: {
      fontSize: 18,
    },
    italic: {
      fontSize: 20,
    },
  };
  const tree = renderer.create(
    <RNDraftJSRender contentState={data} customStyles={customStyles} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
