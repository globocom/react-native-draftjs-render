/**
 * Source: https://github.com/globocom/react-native-draftjs-render/blob/master/src/flatAttributesList.js
 */
function sortInteger(a, b) {
    return a - b;
}
function isLink(element) {
    return Object.prototype.hasOwnProperty.call(element, 'key');
}
function convertStylesIntoNumbers(styles) {
    return styles.reduce((acc, { offset, length }) => [...acc, offset, offset + length], []);
}
function createArrayWithSegments(numbersList) {
    return numbersList.map((current, i) => {
        const next = numbersList[i + 1];
        return [current, next - current];
    });
}
function addTypeToSegments(segments, attributes) {
    return segments
        .map((segment) => {
        const types = [];
        let urlIndex = '';
        attributes.forEach((attribute) => {
            var _a;
            const length = segment[0] + segment[1];
            if (length > attribute.offset && length <= attribute.offset + attribute.length) {
                if (isLink(attribute)) {
                    types.push('link');
                    urlIndex = attribute.key;
                }
                else {
                    types.push((_a = attribute.style) === null || _a === void 0 ? void 0 : _a.toLowerCase());
                }
            }
        });
        if (types.length === 0)
            return;
        return Object.assign({ style: types, offset: segment[0], length: segment[1] }, (urlIndex !== undefined ? { key: urlIndex } : {}));
    })
        .filter((inlineStyle) => !!inlineStyle);
}
function isOverlap(styles) {
    return styles.some((a) => styles.some((b) => b.offset >= a.offset && b.offset <= a.offset + a.length));
}
export default function flatAttributesList(attrsList) {
    if (attrsList.length === 1 || !isOverlap(attrsList)) {
        const [attr] = attrsList;
        if (isLink(attr))
            return [Object.assign(Object.assign({}, attr), { style: ['link'] })];
        return [attr];
    }
    const numbersList = convertStylesIntoNumbers(attrsList);
    const sortedNumbersList = numbersList.sort(sortInteger);
    const uniqueSortedNumbersList = Array.from(new Set(sortedNumbersList));
    const segments = createArrayWithSegments(uniqueSortedNumbersList);
    const result = addTypeToSegments(segments, attrsList);
    return result;
}
