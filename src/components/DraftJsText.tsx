import React, { useMemo } from 'react';
import { Text, TextStyle } from 'react-native';

import loadAttributes from '../loadAttributes';
import { BlockType, CustomStyleType, DraftJsTextProps } from '../typings';
import defaultStyles from './defaultStyles';

export default function DraftJsText(props: DraftJsTextProps): JSX.Element {
  const {
    text = '',
    data = {},
    type,
    textProps = {},
    customStyles,
    entityMap,
    entityRanges,
    navigate,
    inlineStyleRanges = [],
  } = props;

  const textElements = useMemo(() => {
    if (!text) return null;

    return loadAttributes({
      text,
      customStyles,
      inlineStyleRanges,
      entityRanges,
      entityMap,
      navigate,
      textProps,
      type,
    });
  }, [customStyles, entityMap, entityRanges, inlineStyleRanges, navigate, textProps, text, type]);

  return (
    <Text
      style={[
        defaultStyles[type as BlockType],
        { textAlign: data.textAlignment as TextStyle['textAlign'] },
        customStyles?.[type as CustomStyleType],
      ]}
      {...textProps}
    >
      {textElements}
    </Text>
  );
}
