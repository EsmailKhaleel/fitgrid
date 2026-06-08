import { describe, expect, it } from 'vitest'
import { normalizeLength, normalizeMaxColumns, normalizeMode } from './normalize.js'
import { GridError } from './errors.js'

describe('normalizeLength', () => {
  it('converts numbers to px', () => {
    expect(normalizeLength(280, 'min')).toBe('280px')
  })

  it('passes through CSS length strings', () => {
    expect(normalizeLength('16rem', 'gap')).toBe('16rem')
    expect(normalizeLength('1fr', 'max', { allowZero: true })).toBe('1fr')
  })

  it('trims string values', () => {
    expect(normalizeLength('  280px  ', 'min')).toBe('280px')
  })

  it('rejects negative numbers', () => {
    expect(() => normalizeLength(-100, 'min')).toThrow(GridError)
    expect(() => normalizeLength(-100, 'min')).toThrow(
      'min must be a positive number or CSS length (received: -100)',
    )
  })

  it('rejects zero min by default', () => {
    expect(() => normalizeLength(0, 'min')).toThrow(GridError)
  })

  it('allows zero gap when allowZero is true', () => {
    expect(normalizeLength(0, 'gap', { allowZero: true })).toBe('0px')
  })

  it('rejects empty strings', () => {
    expect(() => normalizeLength('   ', 'gap')).toThrow(
      'gap must be a non-empty CSS length (received: empty string)',
    )
  })

  it('rejects non-finite numbers', () => {
    expect(() => normalizeLength(Number.NaN, 'min')).toThrow(
      'min must be a finite number (received: NaN)',
    )
  })
})

describe('normalizeMode', () => {
  it('defaults to fit', () => {
    expect(normalizeMode(undefined)).toBe('fit')
  })

  it('accepts fit and fill', () => {
    expect(normalizeMode('fit')).toBe('fit')
    expect(normalizeMode('fill')).toBe('fill')
  })

  it('rejects invalid modes', () => {
    expect(() => normalizeMode('stretch')).toThrow(
      'mode must be "fit" or "fill" (received: stretch)',
    )
  })
})

describe('normalizeMaxColumns', () => {
  it('returns undefined when omitted', () => {
    expect(normalizeMaxColumns(undefined, 'maxColumns')).toBeUndefined()
  })

  it('accepts positive integers', () => {
    expect(normalizeMaxColumns(4, 'maxColumns')).toBe(4)
  })

  it('rejects non-integers', () => {
    expect(() => normalizeMaxColumns(2.5, 'maxColumns')).toThrow(
      'maxColumns must be a positive integer (received: 2.5)',
    )
  })

  it('rejects non-positive values', () => {
    expect(() => normalizeMaxColumns(0, 'maxColumns')).toThrow(
      'maxColumns must be a positive integer (received: 0)',
    )
  })
})
