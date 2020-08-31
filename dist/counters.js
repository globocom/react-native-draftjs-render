/**
 * Called by when ever a non-list item render
 * Might return a view for spacing the list
 */
export function checkNonListCounter(inputCounters) {
    const orderedCounter = inputCounters['ordered-list-item'];
    const unorderedCounter = inputCounters['unordered-list-item'];
    if (orderedCounter.count <= 0 && unorderedCounter.count <= 0)
        return false;
    inputCounters['unordered-list-item'].count = 0;
    inputCounters['ordered-list-item'].count = 0;
    return true;
}
/**
 * Called by when ever a list item render, for counting and keep track of list rendering
 * Might return a view for spacing the list
 */
export function checkListCounter(counter) {
    if (counter.count <= 0)
        return false;
    counter.count = 0;
    return true;
}
