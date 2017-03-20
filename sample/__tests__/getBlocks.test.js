/* eslint-env jest */
import getBlocks from '../../src/getBlocks';

jest.mock('../../src/components/DraftJsText', () => 'DraftJsText');
jest.mock('../../src/components/BlockQuote', () => 'BlockQuote');
jest.mock('../../src/components/UnorderedListItem', () => 'UnorderedListItem');
jest.mock('../../src/components/OrderedListItem', () => 'OrderedListItem');

describe('return specific component based on type', () => {
  it('DraftJsText when type unstyled', () => {
    const bodyData = { blocks: [{ type: 'unstyled' }] };
    const result = getBlocks(bodyData);
    expect(result[0].type).toBe('DraftJsText');
  });

  it('BlockQuote when type blockquote', () => {
    const bodyData = { blocks: [{ type: 'blockquote', text: 'My text' }] };
    const result = getBlocks(bodyData);
    expect(result[0].type).toBe('BlockQuote');
  });

  it('UnorderedListItem when type unordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'unordered-list-item' }] };
    const result = getBlocks(bodyData);
    expect(result[0].type).toBe('UnorderedListItem');
  });

  it('OrderedListItem when type ordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item' }] };
    const result = getBlocks(bodyData);
    expect(result[0].type).toBe('OrderedListItem');
  });

  it('atomicHandler function when type atomic', () => {
    const bodyData = { blocks: [{ type: 'atomic' }] };
    const atomicHandler = item => item;
    const result = getBlocks(bodyData, {}, atomicHandler);
    expect(result[0].type).toBe('atomic');
  });

  it('array of null when type is invalid', () => {
    const bodyData = { blocks: [{ type: 'my-own-type' }] };
    const result = getBlocks(bodyData);
    expect(result[0]).toBe(null);
  });

  it('null when bodyData doesn\'t have blocks', () => {
    const bodyData = { data: 'other-data' };
    const result = getBlocks(bodyData);
    expect(result).toBe(null);
  });
});
