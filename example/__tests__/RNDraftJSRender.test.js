import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import RNDraftJSRender from '../../index';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const data = {};
  const tree = renderer.create(
    <RNDraftJSRender contentState={data} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
