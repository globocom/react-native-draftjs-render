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
export function checkNonListCounter(inputCounters: ListCounters): boolean {
  const orderedCounter = inputCounters['ordered-list-item'];
  const unorderedCounter = inputCounters['unordered-list-item'];

  if (orderedCounter.count <= 0 && unorderedCounter.count <= 0) return false;

  inputCounters['unordered-list-item'].count = 0;
  inputCounters['ordered-list-item'].count = 0;

  return true;
}

/**
 * Called by when ever a list item render, for counting and keep track of list rendering
 * Might return a view for spacing the list
 */
export function checkListCounter(counter: OrderedListItemCounter | UnorderedListItemCounter): boolean {
  if (counter.count <= 0) return false;

  counter.count = 0;
  return true;
}
