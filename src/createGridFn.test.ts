import { describe, expect, it } from 'vitest'
import { createGridFn } from './createGridFn.js'
import { grid, twGrid } from './index.js'

describe('createGridFn', () => {
  it('creates a callable with auto and tailwind methods', () => {
    const fn = createGridFn()
    expect(typeof fn).toBe('function')
    expect(typeof fn.auto).toBe('function')
    expect(typeof fn.tailwind).toBe('function')
  })

  it('produces independent instances', () => {
    const a = createGridFn()
    const b = createGridFn()
    expect(a).not.toBe(b)
    expect(a.auto(250)).toEqual(b.auto(250))
  })
})

describe('exported grid singleton', () => {
  it('grid and twGrid share one instance', () => {
    expect(grid).toBe(twGrid)
  })
})
