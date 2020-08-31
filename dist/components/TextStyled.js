import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
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
});
function createStyle(types, source) {
    return types.reduce((acc, type) => (Object.assign(Object.assign({}, acc), source === null || source === void 0 ? void 0 : source[type])), {});
}
export default function TextStyled(props) {
    const { type = '', text, customStyles, lineHeight, onPress } = props;
    const textStyle = useMemo(() => {
        if (typeof type === 'string') {
            return [textStyles === null || textStyles === void 0 ? void 0 : textStyles[type], customStyles === null || customStyles === void 0 ? void 0 : customStyles[type]].filter((s) => !!s);
        }
        if (!Array.isArray(type))
            return [];
        return [
            createStyle(type, textStyles),
            typeof customStyles === 'object' ? createStyle(type, customStyles) : undefined,
        ].filter((s) => !!s);
    }, [type, customStyles]);
    return (<Text style={[textStyle, lineHeight]} onPress={onPress}>
      {text}
    </Text>);
}
