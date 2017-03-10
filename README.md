# React Native Draft.js Render
A React Native render for [Draft.js](http://draftjs.org/) model.

## Getting Started
Install **React Native Draft.js Render** on your Reat Native project, using NPM or Yarn:

```sh
npm i -S react-native-draftjs-render
# or...
yarn add react-native-draftjs-render
```

### Using
Just import and insert your Draft.js model on RNDraftJSRender.

```js
import React from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';

import RNDraftJSRender from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const MyApp = () => (
  <RNDraftJSRender
    contentState={contentState}
  />
);

AppRegistry.registerComponent('MyApp', () => MyApp);
```

See our [`example`](https://github.com/globoi/react-native-draftjs-render/tree/master/example) folder for more details.
