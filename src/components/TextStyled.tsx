import React, { useMemo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { CustomStyles, CustomStyleType, InlineStyles, InlineType, TextStyledProps } from '../typings';

const textStyles = StyleSheet.flatten({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
} as InlineStyles);

function createStyle(types: InlineType[], source?: CustomStyles): TextStyle {
  return types.reduce<TextStyle>((acc, type) => ({ ...acc, ...source?.[type] }), {});
}

export default function TextStyled(props: TextStyledProps): JSX.Element {
  const { type = '', text, customStyles, lineHeight, onPress } = props;

  const textStyle = useMemo<TextStyle[]>(() => {
    if (typeof type === 'string') {
      return [textStyles?.[type as InlineType], customStyles?.[type as CustomStyleType]].filter(
        (s): s is TextStyle => !!s,
      );
    }

    if (!Array.isArray(type)) return [];

    return [
      createStyle(type, textStyles),
      typeof customStyles === 'object' ? createStyle(type, customStyles) : undefined,
    ].filter((s): s is TextStyle => !!s);
  }, [type, customStyles]);

  return (
    <Text style={[textStyle, lineHeight]} onPress={onPress}>
      {text}
    </Text>
  );
}
