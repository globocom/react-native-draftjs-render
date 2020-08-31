import { TextProps } from 'react-native';
import { Block, ContentState, CustomStyles, EntityMap } from './typings';
export type { ContentState, Block, CustomStyles } from './typings';
interface Props {
    contentState: ContentState;
    orderedListSeparator?: string;
    depthMargin?: number;
    textProps?: TextProps;
    customStyles?: CustomStyles;
    navigate?: (url: string) => Promise<void>;
    atomicHandler: (params: {
        block: Block;
        entityMap: EntityMap;
    }) => JSX.Element;
    customBlockHandler?: (params: {
        block: Block;
        entityMap: EntityMap;
    }) => any;
}
export declare function DraftJsRender(props: Props): JSX.Element;
