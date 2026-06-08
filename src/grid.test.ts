import { describe, expect, it } from 'vitest'
import { grid, twGrid, gridVars, GridError } from './index.js'

describe('grid', () => {
  it('returns default grid styles', () => {
    expect(grid()).toEqual({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    })
  })

  it('accepts custom configuration', () => {
    expect(
      grid({
        min: 280,
        gap: 24,
        mode: 'fill',
        max: '2fr',
        maxColumns: 3,
      }),
    ).toEqual({
      display: 'grid',
      gridTemplateColumns:
        'repeat(auto-fill, minmax(max(280px, calc((100% - 24px * 2) / 3)), 2fr))',
      gap: '24px',
    })
  })

  it('accepts string lengths', () => {
    expect(grid({ min: '18rem', gap: '1rem' })).toEqual({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
      gap: '1rem',
    })
  })

  it('throws GridError for invalid config', () => {
    expect(() => grid({ min: -1 })).toThrow(GridError)
    expect(() => grid({ maxColumns: 1.5 })).toThrow(GridError)
    expect(() => grid({ mode: 'stretch' as 'fit' })).toThrow(GridError)
  })
})

describe('grid.auto', () => {
  it('returns defaults when called with no args', () => {
    expect(grid.auto()).toEqual(grid())
  })

  it('accepts a numeric min', () => {
    expect(grid.auto(280)).toEqual(grid({ min: 280 }))
  })

  it('accepts a string min', () => {
    expect(grid.auto('16rem')).toEqual(grid({ min: '16rem' }))
  })

  it('accepts min and gap', () => {
    expect(grid.auto(280, 24)).toEqual(grid({ min: 280, gap: 24 }))
  })

  it('accepts a full config object', () => {
    expect(grid.auto({ min: 280, maxColumns: 4 })).toEqual(
      grid({ min: 280, maxColumns: 4 }),
    )
  })

  it('throws GridError for invalid config', () => {
    expect(() => grid.auto({ min: -1 })).toThrow(GridError)
  })
})

describe('grid.tailwind', () => {
  it('returns className and CSS variables', () => {
    expect(grid.tailwind({ min: 280, gap: 16 })).toEqual({
      className:
        'grid gap-[var(--fitgrid-gap)] [grid-template-columns:var(--fitgrid-columns)]',
      style: gridVars({ min: 280, gap: 16 }),
    })
  })

  it('returns defaults when called with no args', () => {
    expect(grid.tailwind()).toEqual({
      className:
        'grid gap-[var(--fitgrid-gap)] [grid-template-columns:var(--fitgrid-columns)]',
      style: gridVars(),
    })
  })
})

describe('twGrid alias', () => {
  it('is the same reference as grid', () => {
    expect(twGrid).toBe(grid)
  })

  it('returns identical results', () => {
    expect(twGrid.auto(250)).toEqual(grid.auto(250))
    expect(twGrid.tailwind({ min: 250 })).toEqual(grid.tailwind({ min: 250 }))
  })
})

describe('gridVars', () => {
  it('returns CSS custom properties', () => {
    expect(gridVars({ min: 280, gap: 16 })).toEqual({
      '--fitgrid-min': '280px',
      '--fitgrid-gap': '16px',
      '--fitgrid-max': '1fr',
      '--fitgrid-columns':
        'repeat(auto-fit, minmax(var(--fitgrid-min), var(--fitgrid-max)))',
    })
  })

  it('includes maxColumns in column expression', () => {
    expect(gridVars({ min: 280, gap: 16, maxColumns: 4 })).toEqual({
      '--fitgrid-min': '280px',
      '--fitgrid-gap': '16px',
      '--fitgrid-max': '1fr',
      '--fitgrid-columns':
        'repeat(auto-fit, minmax(max(var(--fitgrid-min), calc((100% - var(--fitgrid-gap) * 3) / 4)), var(--fitgrid-max)))',
    })
  })
})
