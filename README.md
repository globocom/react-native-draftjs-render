# React Native Draft.js Render

[![Build Status](https://travis-ci.org/globocom/react-native-draftjs-render.svg?branch=master)](https://travis-ci.org/globocom/react-native-draftjs-render)

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

See our [`sample`](https://github.com/globocom/react-native-draftjs-render/tree/master/sample) folder for more details.

## Developing

To develope using example react-native project:

```
git clone git@github.com:globoi/react-native-draftjs-render.git
cd react-native-draftjs-render/
make setup
```
To run tests:

```
make tests
```

To watch lib changes to appear on Sample App:

```
make watch
```

To run sample app in iOS:

```
make ios
```

To run sample app in iOS:

```
make android
```
