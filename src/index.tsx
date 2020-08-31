import React from 'react';
import { Text, TextProps, View } from 'react-native';

import BlockQuote from './components/BlockQuote';
import DraftJsText from './components/DraftJsText';
import OrderedListItem from './components/OrderedListItem';
import UnorderedListItem from './components/UnorderedListItem';
import { checkListCounter, checkNonListCounter, ListCounters } from './counters';
import { Block, ContentState, CustomStyles, EntityMap } from './typings';
export type { ContentState, Block, CustomStyles } from './typings';

interface Props {
  contentState: ContentState;
  orderedListSeparator?: string;
  depthMargin?: number;
  textProps?: TextProps;
  customStyles?: CustomStyles;
  navigate?: (url: string) => Promise<void>;
  atomicHandler: (params: { block: Block; entityMap: EntityMap }) => JSX.Element;
  customBlockHandler?: (params: { block: Block; entityMap: EntityMap }) => any;
}

export function DraftJsRender(props: Props): JSX.Element {
  const {
    contentState,
    customStyles,
    navigate,
    orderedListSeparator,
    customBlockHandler,
    depthMargin,
    atomicHandler,
    textProps = {},
  } = props;

  const { blocks, entityMap } = contentState;

  if (!blocks) return <View />;

  // NOTE: this data must be re-init when re-render
  const counters: ListCounters = {
    'unordered-list-item': {
      count: 0,
      type: 'unordered-list-item',
      childCounters: [],
    },
    'ordered-list-item': {
      count: 0,
      type: 'ordered-list-item',
      childCounters: [],
    },
  };

  return (
    <View>
      {blocks.map<JSX.Element>((block: Block) => {
        const { key, type, text, data, inlineStyleRanges, entityRanges, depth } = block;
        const itemData = { key, type, text, data, inlineStyleRanges, entityRanges, depth };

        switch (type) {
          case 'unstyled':
          case 'paragraph':
          case 'header-one':
          case 'header-two':
          case 'header-three':
          case 'header-four':
          case 'header-five':
          case 'header-six':
          case 'code-block': {
            return (
              <View key={key}>
                {checkNonListCounter(counters) && <View style={customStyles?.viewAfterList} />}

                <DraftJsText
                  {...itemData}
                  entityMap={entityMap}
                  customStyles={customStyles}
                  navigate={navigate}
                  textProps={textProps}
                />
              </View>
            );
          }

          case 'blockquote': {
            return (
              <View key={key}>
                {checkNonListCounter(counters) && <View style={customStyles?.viewAfterList} />}

                <BlockQuote
                  {...itemData}
                  entityMap={contentState.entityMap}
                  customStyles={customStyles}
                  navigate={navigate}
                  textProps={textProps}
                />
              </View>
            );
          }

          case 'unordered-list-item': {
            counters[type].count += 1;

            return (
              <View key={key}>
                {checkListCounter(counters['ordered-list-item']) && <View style={customStyles?.viewAfterList} />}

                <UnorderedListItem
                  {...itemData}
                  entityMap={contentState.entityMap}
                  customStyles={customStyles}
                  navigate={navigate}
                  defaultMarginLeft={depthMargin}
                  textProps={textProps}
                />
              </View>
            );
          }

          case 'ordered-list-item': {
            const parentIndex = counters[type].count;

            let number = 0;

            // when new ordered list reset childCounters
            if (parentIndex === 0) counters[type].childCounters = [];

            if (itemData?.depth >= 1) {
              if (counters[type].childCounters[parentIndex] === undefined) {
                counters[type].childCounters[parentIndex] = 0;
              }

              counters[type].childCounters[parentIndex] += 1;
              number = counters[type].childCounters[parentIndex];
            } else {
              counters[type].count += 1;
              number = counters[type].count;
            }

            return (
              <View key={key}>
                {checkListCounter(counters['unordered-list-item']) && <View style={customStyles?.viewAfterList} />}

                <OrderedListItem
                  {...itemData}
                  separator={orderedListSeparator}
                  counter={number}
                  entityMap={contentState.entityMap}
                  customStyles={customStyles}
                  navigate={navigate}
                  defaultMarginLeft={depthMargin}
                  textProps={textProps}
                />
              </View>
            );
          }

          case 'atomic': {
            return (
              <View key={key}>
                {checkNonListCounter(counters) && <View style={customStyles?.viewAfterList} />}

                {typeof atomicHandler === 'function' ? (
                  atomicHandler({ block, entityMap })
                ) : (
                  <Text>{'Un-handled atomic block'}</Text>
                )}
              </View>
            );
          }

          default: {
            return (
              <View key={key}>
                {checkNonListCounter(counters) && <View style={customStyles?.viewAfterList} />}

                {typeof customBlockHandler === 'function' ? (
                  customBlockHandler({ block, entityMap })
                ) : (
                  <Text>{'Un-handled custom block'}</Text>
                )}
              </View>
            );
          }
        }
      })}
    </View>
  );
}
