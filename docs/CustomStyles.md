# Custom Styles
RNDraftJSRender comes with default styles, but you can use your own with the `customStyles` property:

```js
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import RNDraftJSRender from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const styles = StyleSheet.flatten({ // Use .flatten over .create
  'header-one': {
    fontSize: 20,
  },
  paragraph: {
    color: 'pink',
    fontSize: 14,
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

## List of styles available

### Text styles

All the elements (except `'code-block'`) can have inner styles and been customized with:

- `bold`

- `italic`

- `link`

- `underline`

- `strikethrough`

### Elements

Each element have your own style and helper styles to use:

- `blockquote`
  - `blockquoteContainer`
  - `blockquoteIconBefore`
  - `blockquoteIconAfter`

- `'code-block'`

- `'header-one'`

- `'header-two'`

- `'header-three'`

- `'header-four'`

- `'header-five'`

- `'header-six'`

- `'ordered-list-item'`
  - `orderedListItemContainer`
  - `orderedListItemNumber`

- `paragraph`

- `'unordered-list-item'`
  - `unorderedListItemContainer`
  - `unorderedListItemBullet`

- `unstyled`

- `viewAfterList` (View placed after a list to handle styles at the end of each one)
