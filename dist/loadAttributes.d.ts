import { TextProps } from 'react-native';
import { CustomStyles, EntityMap, EntityRange, InlineStyleRange, RawInlineStyle } from './typings';
export declare function getItemOnPress(item: InlineStyleRange, entityMap: EntityMap | undefined, navigate: (url: string) => Promise<void>): (() => Promise<void>) | undefined;
interface ParamsType {
    text: string;
    type: string;
    customStyles?: CustomStyles;
    inlineStyleRanges: RawInlineStyle[];
    entityRanges: EntityRange[];
    entityMap?: EntityMap;
    navigate?: (url: string) => Promise<void>;
    textProps?: TextProps;
}
export default function loadAttributes(params: ParamsType): (string | JSX.Element)[];
export {};
