import React from 'react';
import { StyleSheet, View } from 'react-native';
import DraftJsText from './DraftJsText';
export default function BlockQuote(props) {
    const { customStyles } = props;
    return (<View style={[styles.blockquoteContainer, customStyles === null || customStyles === void 0 ? void 0 : customStyles.blockquoteContainer]}>
      <View style={customStyles === null || customStyles === void 0 ? void 0 : customStyles.blockquoteIconBefore}/>
      <DraftJsText {...props}/>

      <View style={customStyles === null || customStyles === void 0 ? void 0 : customStyles.blockquoteIconAfter}/>
    </View>);
}
const styles = StyleSheet.create({
    blockquoteContainer: {
        borderLeftColor: '#eee',
        borderLeftWidth: 4,
        borderStyle: 'solid',
        marginTop: 22,
        marginBottom: 22,
        paddingLeft: 12,
    },
});
