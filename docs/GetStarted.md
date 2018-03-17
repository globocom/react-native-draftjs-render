# Get Started

First, install **React Native Draft.js Render** on your React Native project, using NPM or Yarn:

```sh
yarn add react-native-draftjs-render
# or...
npm i -S react-native-draftjs-render
```

## How to Use

Just import and insert your Draft.js model on RNDraftJSRender:

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

* `contentState`: the Draft.js model with `blocks` and `entityMap` nodes.
```js
// Flow type for contentState
type contentState: {
  blocks: Array<Object>,
  entityMap: Object,
};
```

See our [`sample`](https://github.com/globocom/react-native-draftjs-render/tree/master/sample) folder for more details.

## Props

- **contentState**: the Draft.js model with `blocks` and `entityMap`.
```js
// Flow type for contentState
type contentState: {
  blocks: Array<Object>,
  entityMap: Object,
};
```

- **customStyles**: Object with your custom styles. ([Documentation](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/CustomStyles.md)).

- **atomicHandler**: Function to handle atomic types ([Documentation](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/AtomicTypes.md)).

- **navigate** (optional): Function to be called when `onPress` is fired.

- **orderedListSeparator** (optional): String to be rendered after each number of the ordered lists.

- **customBlockHandler** (optional): Default element to be rendered when some type is not knew.

- **depthMargin** (optional): Margin left for each level of depth lists.

- **textProps** (optional): Object containing all the Text props supported by React Native. (See [Text Props](https://facebook.github.io/react-native/docs/text.html#props)).

## Next

1. **[Custom Styles](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/CustomStyles.md)**.
2. **[Atomic Types](https://github.com/globocom/react-native-draftjs-render/blob/master/docs/AtomicTypes.md)**.
