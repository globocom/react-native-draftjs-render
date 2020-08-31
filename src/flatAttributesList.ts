/**
 * Source: https://github.com/globocom/react-native-draftjs-render/blob/master/src/flatAttributesList.js
 */

import { Attribute, EntityRange, InlineStyleRange, InlineType, RawInlineStyle } from './typings';

function sortInteger(a: number, b: number): number {
  return a - b;
}

function isLink(element: Object): boolean {
  return Object.prototype.hasOwnProperty.call(element, 'key');
}

function convertStylesIntoNumbers(styles: Attribute[]): number[] {
  return styles.reduce<number[]>((acc, { offset, length }) => [...acc, offset, offset + length], []);
}

function createArrayWithSegments(numbersList: number[]): number[][] {
  return numbersList.map<number[]>((current, i) => {
    const next = numbersList[i + 1];
    return [current, next - current];
  });
}

function addTypeToSegments(segments: number[][], attributes: Attribute[]): InlineStyleRange[] {
  return segments
    .map<InlineStyleRange | undefined>((segment) => {
      const types: InlineType[] = [];
      let urlIndex: string = '';

      attributes.forEach((attribute) => {
        const length = segment[0] + segment[1];

        if (length > attribute.offset && length <= attribute.offset + attribute.length) {
          if (isLink(attribute)) {
            types.push('link');
            urlIndex = (attribute as EntityRange).key;
          } else {
            types.push((attribute as RawInlineStyle).style?.toLowerCase() as InlineType);
          }
        }
      });

      if (types.length === 0) return;

      return {
        style: types,
        offset: segment[0],
        length: segment[1],
        ...(urlIndex !== undefined ? { key: urlIndex } : {}),
      };
    })
    .filter((inlineStyle): inlineStyle is InlineStyleRange => !!inlineStyle);
}

function isOverlap(styles: Attribute[]): boolean {
  return styles.some((a) => styles.some((b) => b.offset >= a.offset && b.offset <= a.offset + a.length));
}

export default function flatAttributesList(attrsList: Attribute[]): InlineStyleRange[] {
  if (attrsList.length === 1 || !isOverlap(attrsList)) {
    const [attr] = attrsList;

    if (isLink(attr)) return [{ ...attr, style: ['link'] }];

    return [attr as InlineStyleRange];
  }
  const numbersList = convertStylesIntoNumbers(attrsList);
  const sortedNumbersList = numbersList.sort(sortInteger);
  const uniqueSortedNumbersList = Array.from(new Set(sortedNumbersList));
  const segments = createArrayWithSegments(uniqueSortedNumbersList);
  const result = addTypeToSegments(segments, attrsList);
  return result;
}
