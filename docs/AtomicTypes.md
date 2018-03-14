# Atomic Types

RNDraftJSRender makes it easy to handle atomic elements with a `atomicHandler` function. Take a look at this example:

Let's say that we have a atomic of type `image` inside our `contentState.blocks`.

```json
{
  "blocks": [
    {
      "key": "3tvln",
      "type": "atomic",
      "data": {
        "type": "image",
        "uri": "https://lorempixel.com/400/200/"
      }
    }
  ]
}
```

You can render this atomic passing a callback called `atomicHandler` to RNDraftJSRender.

```js
const atomicHandler = (item: Object, entityMap: Object): ?React$Element<*> => {
  switch (item.data.type) {
    case 'image':
      return (
        <View key={item.key} style={{ flex: 1 }}>
          <Image
            style={{ width: 288, height: 161 }}
            source={{ uri: item.data.uri }}
          />
        </View>
      );
    default:
      return null;
  }
};

const props = {
  contentState,
  atomicHandler,
};

const blocks = getRNDraftJSBlocks(props);
```
