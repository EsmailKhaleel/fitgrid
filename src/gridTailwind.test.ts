import { describe, expect, it } from 'vitest'
import { GRID_TAILWIND_CLASSES, gridTailwind } from './gridTailwind.js'
import { gridVars } from './gridVars.js'

describe('gridTailwind', () => {
  it('exports stable Tailwind class string', () => {
    expect(GRID_TAILWIND_CLASSES).toBe(
      'grid gap-[var(--fitgrid-gap)] [grid-template-columns:var(--fitgrid-columns)]',
    )
  })

  it('combines className with gridVars style', () => {
    const config = { min: 200, gap: 12, maxColumns: 3 }
    expect(gridTailwind(config)).toEqual({
      className: GRID_TAILWIND_CLASSES,
      style: gridVars(config),
    })
  })
})
