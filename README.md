# React Native Draft.js Render

[![Build Status](https://travis-ci.org/globocom/react-native-draftjs-render.svg?branch=master)](https://travis-ci.org/globocom/react-native-draftjs-render)
[![Coverage Status](https://coveralls.io/repos/github/globocom/react-native-draftjs-render/badge.svg?branch=feature%2Fcoveralls)](https://coveralls.io/github/globocom/react-native-draftjs-render?branch=feature%2Fcoveralls)
[![npm version](https://badge.fury.io/js/react-native-draftjs-render.svg)](https://www.npmjs.com/package/react-native-draftjs-render)

A React Native render for [Draft.js](http://draftjs.org/) model.

## Discussion and Support

Join the [#react-native-render](https://draftjs.slack.com/messages/react_native_render) channel on DraftJS Slack team.

## Getting Started
Install **React Native Draft.js Render** on your Reat Native project, using NPM or Yarn:

```sh
npm i -S react-native-draftjs-render
# or...
yarn add react-native-draftjs-render
```

### Using
Just import and insert your Draft.js model on RNDraftJSRender:

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

### Adding custom styles
RNDraftJSRender comes with default styles, but you can use your own:

```js
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import RNDraftJSRender from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const styles = StyleSheet.create({
  paragraph: {
    color: 'pink',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

const MyApp = () => (
  <RNDraftJSRender
    contentState={contentState}
    customStyles={styles}
  />
);

AppRegistry.registerComponent('MyApp', () => MyApp);
```

See our [`sample`](https://github.com/globocom/react-native-draftjs-render/tree/master/sample) folder for more details.

## Developing

To develop using example react-native project:

```
git clone git@github.com:globocom/react-native-draftjs-render.git
cd react-native-draftjs-render/
make setup
```

To run tests:

```
make test
```

To watch lib changes to appear on Sample App:

```
make watch
```

To run sample app in iOS:

```
make ios
```

To run sample app in Android:

```
make android
```
