import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DraftJsText from './DraftJsText';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textWrap: {
        flex: 1,
    },
    text: {
        marginLeft: 8,
        marginRight: 8,
        fontSize: 14,
        color: 'black',
    },
});
function numberToBase26(input) {
    const odd = input % 26;
    return String.fromCharCode(odd + 64).toLowerCase();
}
export default function OrderedListItem(props) {
    const { counter = 1, separator = '.', customStyles, depth = 0, defaultMarginLeft = 16 } = props;
    const style = customStyles === null || customStyles === void 0 ? void 0 : customStyles.orderedListItemNumber;
    const marginLeft = useMemo(() => {
        if (depth === 0)
            return 0;
        const propsMarginLeft = style === null || style === void 0 ? void 0 : style.marginLeft;
        return typeof propsMarginLeft === 'number' ? depth * propsMarginLeft : depth * defaultMarginLeft;
    }, [style === null || style === void 0 ? void 0 : style.marginLeft, defaultMarginLeft, depth]);
    const indentChar = useMemo(() => {
        const odd = depth % 2;
        // Numeric
        if (odd === 0)
            return String(counter);
        // Alphabet
        else
            return numberToBase26(counter);
    }, [counter, depth]);
    return (<View style={[styles.container, customStyles === null || customStyles === void 0 ? void 0 : customStyles.orderedListItemContainer, { marginLeft }]}>
      <Text style={[styles.text, style]}>
        {indentChar}
        {separator}
      </Text>

      <View style={styles.textWrap}>
        <DraftJsText {...props}/>
      </View>
    </View>);
}
