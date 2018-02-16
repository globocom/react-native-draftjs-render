/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* eslint-env jest */

import getBlocks from '../../src/getBlocks'

jest.mock('../../src/components/DraftJsText', () => 'DraftJsText')
jest.mock('../../src/components/BlockQuote', () => 'BlockQuote')
jest.mock('../../src/components/UnorderedListItem', () => 'UnorderedListItem')
jest.mock('../../src/components/OrderedListItem', () => 'OrderedListItem')

describe('return specific component based on type', () => {
  it('DraftJsText when type unstyled', () => {
    const bodyData = { blocks: [{ type: 'unstyled' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].type).toBe('DraftJsText')
  })

  it('BlockQuote when type blockquote', () => {
    const bodyData = { blocks: [{ type: 'blockquote', text: 'My text' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].type).toBe('BlockQuote')
  })

  it('UnorderedListItem when type unordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'unordered-list-item' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].type).toBe('UnorderedListItem')
  })

  it('OrderedListItem when type ordered-list-item', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].type).toBe('OrderedListItem')
  })

  it('OrderedListItem when depth is undefined', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
  })

  it('OrderedListItem when depth is one', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item', depth: 1 }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
  })

  it('OrderedListItem when depth is two', () => {
    const bodyData = { blocks: [{ type: 'ordered-list-item', depth: 2 }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
  })

  it('OrderedListItem when is second item', () => {
    const bodyData = { blocks: [
      {
        text: 'first',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'second',
        type: 'ordered-list-item',
        depth: 0
      }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
    expect(result[1].props.children[1].props.counter).toBe(2)
  })

  it('OrderedListItem when is first item has two children', () => {
    const bodyData = { blocks: [
      {
        text: 'mother',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'first',
        type: 'ordered-list-item',
        depth: 1
      },
      {
        text: 'second',
        type: 'ordered-list-item',
        depth: 1
      }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
    expect(result[1].props.children[1].props.counter).toBe(1)
    expect(result[2].props.children[1].props.counter).toBe(2)
  })

  it('OrderedListItem when is second item has two children', () => {
    const bodyData = { blocks: [
      {
        text: 'first',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'mother',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'first',
        type: 'ordered-list-item',
        depth: 1
      },
      {
        text: 'second',
        type: 'ordered-list-item',
        depth: 1
      }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
    expect(result[1].props.children[1].props.counter).toBe(2)
    expect(result[2].props.children[1].props.counter).toBe(1)
    expect(result[3].props.children[1].props.counter).toBe(2)
  })

  it('OrderedListItem when there are multiple OrderedLists', () => {
    const bodyData = { blocks: [
      {
        text: 'mother',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'first',
        type: 'ordered-list-item',
        depth: 1
      },
      {
        text: '',
        type: 'unstyled'
      },
      {
        text: 'new first',
        type: 'ordered-list-item',
        depth: 0
      },
      {
        text: 'new second',
        type: 'ordered-list-item',
        depth: 0
      }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children[1].props.counter).toBe(1)
    expect(result[1].props.children[1].props.counter).toBe(1)
    expect(result[3].props.children[1].props.counter).toBe(1)
    expect(result[4].props.children[1].props.counter).toBe(2)
  })

  it('getBlocks when multiple list types', () => {
    const bodyData = { blocks: [
      { type: 'ordered-list-item' }, { type: 'unordered-list-item' },
      { type: 'ordered-list-item' }, { type: 'unordered-list-item' }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[3].props.children[1].type).toBe('UnorderedListItem')
  })

  it('getBlocks with mixed types one being a list', () => {
    const bodyData = { blocks: [
      { type: 'ordered-list-item' }, { type: 'blockquote' }
    ] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[1].props.children[1].type).toBe('BlockQuote')
  })

  it('atomicHandler function when type atomic', () => {
    const bodyData = { blocks: [{ type: 'atomic' }] }
    const atomicHandler = item => item
    const result = getBlocks({ contentState: bodyData, atomicHandler })
    expect(result[0].type).toBe('atomic')
  })

  it('atomicHandler function when type atomic between lists', () => {
    const bodyData = { blocks: [
      { type: 'ordered-list-item' }, { type: 'atomic' }, { type: 'ordered-list-item' }
    ] }
    const atomicHandler = item => item
    const result = getBlocks({ contentState: bodyData, atomicHandler })
    expect(result[1].props.children[1].type).toBe('atomic')
  })

  it('array of null when type is invalid', () => {
    const bodyData = { blocks: [{ type: 'my-own-type' }] }
    const result = getBlocks({ contentState: bodyData })
    expect(result[0].props.children).toBe(null)
  })

  it('null when bodyData doesn\'t have blocks', () => {
    const bodyData = { data: 'other-data' }
    const result = getBlocks({ contentState: bodyData })
    expect(result).toBe(null)
  })

  it('should use the optional customBlockHandler when handling custom block types', () => {
    const bodyData = { blocks: [{ type: 'my-own-type' }] }
    const myCustomComponent = jest.fn()
    const customBlockHandler = jest.fn((item, params) => myCustomComponent)
    const result = getBlocks({ contentState: bodyData, customBlockHandler })
    expect(customBlockHandler.mock.calls.length).toBe(1)
    expect(customBlockHandler.mock.calls[0][0].type).toBe('my-own-type')
    expect(customBlockHandler.mock.calls[0][1].contentState).toBe(bodyData)
    expect(customBlockHandler.mock.calls[0][1].customBlockHandler).toBe(customBlockHandler)
    expect(result[0]).toBe(myCustomComponent)
  })
})
