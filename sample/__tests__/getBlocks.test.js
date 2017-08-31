/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import getBlocks from '../../src/getBlocks';

jest.mock('../../src/components/DraftJsText', () => 'DraftJsText');
jest.mock('../../src/components/BlockQuote', () => 'BlockQuote');
jest.mock('../../src/components/UnorderedListItem', () => 'UnorderedListItem');
jest.mock('../../src/components/OrderedListItem', () => 'OrderedListItem');

describe('return specific component based on type', () => {
  it('DraftJsText when type unstyled', () => {
    const bodyData = { blocks: [{ type: 'unstyled' }] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[0].props.children[1].type).toBe('DraftJsText');
  });

  it('BlockQuote when type blockquote', () => {
    const bodyData = { blocks: [{ type: 'blockquote', text: 'My text' }] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[0].props.children[1].type).toBe('BlockQuote');
  });

  it('UnorderedListItem when type unordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'unordered-list-item' }] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[0].props.children[1].type).toBe('UnorderedListItem');
  });

  it('OrderedListItem when type ordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item' }] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[0].props.children[1].type).toBe('OrderedListItem');
  });

  it('getBlocks when multiple list types', () => {
    const bodyData = { blocks: [
      { type: 'ordered-list-item' }, { type: 'unordered-list-item' },
      { type: 'ordered-list-item' }, { type: 'unordered-list-item' },
    ] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[3].props.children[1].type).toBe('UnorderedListItem');
  });

  it('getBlocks with mixed types one being a list', () => {
    const bodyData = { blocks: [
      { type: 'ordered-list-item' }, { type: 'blockquote' },
    ] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[1].props.children[1].type).toBe('BlockQuote');
  });

  it('atomicHandler function when type atomic', () => {
    const bodyData = { blocks: [{ type: 'atomic' }] };
    const atomicHandler = item => item;
    const result = getBlocks({ contentState: bodyData, atomicHandler });
    expect(result[0][1].type).toBe('atomic');
  });

  it('array of null when type is invalid', () => {
    const bodyData = { blocks: [{ type: 'my-own-type' }] };
    const result = getBlocks({ contentState: bodyData });
    expect(result[0].props.children).toBe(null);
  });

  it('null when bodyData doesn\'t have blocks', () => {
    const bodyData = { data: 'other-data' };
    const result = getBlocks({ contentState: bodyData });
    expect(result).toBe(null);
  });
});
