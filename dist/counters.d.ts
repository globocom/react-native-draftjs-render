interface OrderedListItemCounter {
    type: 'ordered-list-item';
    count: number;
    childCounters: number[];
}
interface UnorderedListItemCounter {
    type: 'unordered-list-item';
    count: number;
    childCounters: number[];
}
export interface ListCounters {
    'ordered-list-item': OrderedListItemCounter;
    'unordered-list-item': UnorderedListItemCounter;
}
/**
 * Called by when ever a non-list item render
 * Might return a view for spacing the list
 */
export declare function checkNonListCounter(inputCounters: ListCounters): boolean;
/**
 * Called by when ever a list item render, for counting and keep track of list rendering
 * Might return a view for spacing the list
 */
export declare function checkListCounter(counter: OrderedListItemCounter | UnorderedListItemCounter): boolean;
export {};
