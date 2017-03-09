import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import RNDraftJS from '../../index';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const data = {};
  const tree = renderer.create(
    <RNDraftJS contentState={data} />
  );
});
