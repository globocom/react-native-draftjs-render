import React, { useMemo } from 'react';
import { Text } from 'react-native';
import loadAttributes from '../loadAttributes';
import defaultStyles from './defaultStyles';
export default function DraftJsText(props) {
    const { text = '', data = {}, type, textProps = {}, customStyles, entityMap, entityRanges, navigate, inlineStyleRanges = [], } = props;
    const textElements = useMemo(() => {
        if (!text)
            return null;
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
    return (<Text style={[
        defaultStyles[type],
        { textAlign: data.textAlignment },
        customStyles === null || customStyles === void 0 ? void 0 : customStyles[type],
    ]} {...textProps}>
      {textElements}
    </Text>);
}
