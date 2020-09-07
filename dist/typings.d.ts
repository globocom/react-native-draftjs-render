import { RawDraftContentBlock, RawDraftContentState, RawDraftEntityRange, RawDraftInlineStyleRange } from 'draft-js';
import { TextProps, TextStyle, ViewStyle } from 'react-native';
/**
 * Known block type from draft-js
 */
export declare type BlockType = 'blockquote' | 'code-block' | 'header-five' | 'header-four' | 'header-one' | 'header-six' | 'header-three' | 'header-two' | 'paragraph' | 'unstyled' | 'ordered-list-item' | 'unordered-list-item';
/**
 * A record of styles for valid block type
 */
export declare type BlockStyles = Record<BlockType, ViewStyle & TextStyle>;
export declare type InlineType = 'bold' | 'code' | 'italic' | 'strikethrough' | 'underline' | 'link';
export declare type InlineStyles = Record<InlineType, TextStyle>;
export declare type RawInlineStyle = RawDraftInlineStyleRange;
export declare type CustomStyleType = BlockType | InlineType | 'viewAfterList' | 'blockquoteContainer' | 'blockquoteIconBefore' | 'blockquoteIconAfter' | 'orderedListItemContainer' | 'orderedListItemNumber' | 'unorderedListItemBullet' | 'unorderedListItemContainer';
export declare type CustomStyles = Partial<BlockStyles & InlineStyles & Record<CustomStyleType, ViewStyle & TextStyle>>;
export interface InlineStyleRange {
    key?: number | string;
    style: InlineType | InlineType[];
    offset: number;
    length: number;
}
export declare type EntityRange = RawDraftEntityRange;
export declare type EntityMap = RawDraftContentState['entityMap'];
export declare type Block = RawDraftContentBlock;
export interface ContentState {
    blocks: Block[];
    entityMap: EntityMap;
}
export declare type Attribute = RawInlineStyle | EntityRange;
interface BlockProps {
    type: string;
    text: string;
    customStyles?: CustomStyles;
    data?: Record<string, unknown>;
    entityMap?: EntityMap;
    textProps?: TextProps;
    inlineStyleRanges: RawInlineStyle[];
    entityRanges: EntityRange[];
    navigate?: (url: string) => Promise<void>;
}
export interface TextStyledProps {
    text: string;
    type: InlineType[];
    textProps?: TextProps;
    customStyles?: CustomStyles;
    onPress?: () => Promise<void>;
    lineHeight: TextStyle;
}
export interface BlockQuoteProps extends BlockProps {
}
export interface DraftJsTextProps extends BlockProps {
}
export interface OrderedListItemProps extends BlockProps {
    counter: number;
    separator?: string;
    depth: number;
    defaultMarginLeft?: number;
}
export interface UnorderedListItemProps extends BlockProps {
    depth: number;
    defaultMarginLeft?: number;
}
export {};
