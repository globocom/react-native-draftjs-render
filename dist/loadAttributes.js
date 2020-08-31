var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Linking, Text } from 'react-native';
import { length, substring } from 'stringz';
import defaultStyles from './components/defaultStyles';
import TextStyled from './components/TextStyled';
import flatAttributesList from './flatAttributesList';
import generateKey from './generateKey';
import getItemType from './getItemType';
function defaultNavigationFn(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Linking.openURL(url);
    });
}
export function getItemOnPress(item, entityMap, navigate) {
    if (item.key === undefined)
        return undefined;
    if (!entityMap)
        return undefined;
    if (Object.keys(entityMap).length === 0)
        return undefined;
    return () => { var _a, _b; return navigate((_b = (_a = entityMap === null || entityMap === void 0 ? void 0 : entityMap[(item === null || item === void 0 ? void 0 : item.key) || '']) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.url); };
}
export default function loadAttributes(params) {
    var _a, _b;
    const { text, customStyles, inlineStyleRanges, entityRanges, entityMap, navigate, textProps, type } = params;
    const safeInlineStyleRanges = Array.isArray(inlineStyleRanges) ? inlineStyleRanges : [];
    const safeEntityRanges = Array.isArray(entityRanges) ? entityRanges : [];
    const attributes = [...safeInlineStyleRanges, ...safeEntityRanges];
    if (attributes.length === 0)
        return [text];
    const elementList = [];
    const flattenStyles = flatAttributesList(attributes.sort((a, b) => a.offset - b.offset));
    const lineHeight = {
        lineHeight: ((_a = customStyles === null || customStyles === void 0 ? void 0 : customStyles[type]) === null || _a === void 0 ? void 0 : _a.lineHeight) || ((_b = defaultStyles === null || defaultStyles === void 0 ? void 0 : defaultStyles[type]) === null || _b === void 0 ? void 0 : _b.lineHeight),
    };
    if (flattenStyles[0].offset > 0) {
        elementList.push(<Text style={lineHeight} key={generateKey()} {...textProps}>
        {substring(text, 0, flattenStyles[0].offset)}
      </Text>);
    }
    flattenStyles.forEach((item, index) => {
        if (index > 0) {
            const previousItem = flattenStyles[index - 1];
            const offset = previousItem.offset + previousItem.length;
            const subText = substring(text, offset, item.offset);
            if (subText.length) {
                elementList.push(<Text key={generateKey()} {...textProps}>
            {subText}
          </Text>);
            }
        }
        elementList.push(<TextStyled key={generateKey()} type={getItemType(item)} text={substring(text, item.offset, item.offset + item.length)} customStyles={customStyles} textProps={textProps} lineHeight={lineHeight} onPress={getItemOnPress(item, entityMap, navigate || defaultNavigationFn)}/>);
    });
    const lastItem = flattenStyles[flattenStyles.length - 1];
    const offset = lastItem.offset + lastItem.length;
    const subText = substring(text, offset, length(text));
    if (subText.length) {
        elementList.push(<Text key={generateKey()} {...textProps}>
        {subText}
      </Text>);
    }
    return elementList;
}
