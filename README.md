# React Native Draft.js Render

[![Build Status](https://travis-ci.org/globocom/react-native-draftjs-render.svg?branch=master)](https://travis-ci.org/globocom/react-native-draftjs-render)
[![Coverage Status](https://coveralls.io/repos/github/globocom/react-native-draftjs-render/badge.svg)](https://coveralls.io/github/globocom/react-native-draftjs-render)
[![npm version](https://badge.fury.io/js/react-native-draftjs-render.svg)](https://www.npmjs.com/package/react-native-draftjs-render)
[![license](https://img.shields.io/npm/l/react-native-draftjs-render.svg)](https://github.com/globocom/react-native-draftjs-render/blob/master/LICENSE)


A React Native render for [Draft.js](http://draftjs.org/) model.

## Discussion and Support

Join the [#react-native-render](https://draftjs.slack.com/messages/react_native_render) channel on DraftJS Slack team.

## Documentation

* [Get Started](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/GetStarted.md)
* [Add Custom Styles](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/CustomStyles.md)
* [Handle Atomic Types](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/AtomicTypes.md)

## Getting Started
Install **React Native Draft.js Render** on your React Native project, using NPM or Yarn:

```sh
yarn add react-native-draftjs-render
# or...
npm i -S react-native-draftjs-render
```

### Using
Just import and insert your Draft.js model on getRNDraftJSBlocks:

```js
import React from 'react';
import {
  ScrollView,
  AppRegistry,
} from 'react-native';

import getRNDraftJSBlocks from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const MyApp = () => {
  const blocks = getRNDraftJSBlocks({ contentState });
  return (
    <ScrollView style={{ flex: 1 }}>{blocks}</ScrollView>
  );
};

AppRegistry.registerComponent('MyApp', () => MyApp);
```

See our [`sample`](https://github.com/globocom/react-native-draftjs-render/tree/master/sample) folder for more details.

### Adding custom styles
RNDraftJSRender comes with default styles, but you can use your own:

```js
import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
} from 'react-native';

import getRNDraftJSBlocks from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const styles = StyleSheet.flatten({
  paragraph: {
    color: 'pink',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

const MyApp = () => {
  const blocks = getRNDraftJSBlocks({ contentState, customStyles: styles });
  return (
    <ScrollView style={{ flex: 1 }}>{blocks}</ScrollView>
  );
};

AppRegistry.registerComponent('MyApp', () => MyApp);
```

See more at **[Custom Styles](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/CustomStyles.md)** documentation.

## Contributing

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

To watch lib changes appearing on Sample App:

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
