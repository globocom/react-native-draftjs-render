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
        color: 'black',
        fontSize: 14,
    },
});
export default function UnorderedListItem(props) {
    const { customStyles, depth = 0, defaultMarginLeft = 16 } = props;
    const style = customStyles === null || customStyles === void 0 ? void 0 : customStyles.unorderedListItemBullet;
    const paddingLeft = useMemo(() => {
        const propsMarginLeft = style === null || style === void 0 ? void 0 : style.marginLeft;
        return typeof propsMarginLeft === 'number' ? depth * propsMarginLeft : depth * defaultMarginLeft;
    }, [defaultMarginLeft, depth, style === null || style === void 0 ? void 0 : style.marginLeft]);
    const indentChar = useMemo(() => {
        switch (depth) {
            case 0:
                return '•';
            case 1:
                return '◦';
            default:
                return '♦';
        }
    }, [depth]);
    return (<View style={[styles.container, { paddingLeft }, customStyles === null || customStyles === void 0 ? void 0 : customStyles.unorderedListItemContainer]}>
      <Text style={[styles.text, style]}>{indentChar}</Text>
      <View style={styles.textWrap}>
        <DraftJsText {...props}/>
      </View>
    </View>);
}
