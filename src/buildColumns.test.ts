import { describe, expect, it } from 'vitest'
import { buildColumns, buildColumnsWithVars } from './buildColumns.js'
import type { NormalizedGridConfig } from './types.js'

const baseConfig: NormalizedGridConfig = {
  min: '250px',
  gap: '16px',
  mode: 'fit',
  max: '1fr',
}

describe('buildColumns', () => {
  it('builds default auto-fit columns', () => {
    expect(buildColumns(baseConfig)).toBe(
      'repeat(auto-fit, minmax(250px, 1fr))',
    )
  })

  it('uses auto-fill when mode is fill', () => {
    expect(buildColumns({ ...baseConfig, mode: 'fill' })).toBe(
      'repeat(auto-fill, minmax(250px, 1fr))',
    )
  })

  it('applies maxColumns calc pattern', () => {
    expect(buildColumns({ ...baseConfig, maxColumns: 4 })).toBe(
      'repeat(auto-fit, minmax(max(250px, calc((100% - 16px * 3) / 4)), 1fr))',
    )
  })

  it('respects custom max track size', () => {
    expect(buildColumns({ ...baseConfig, max: '400px' })).toBe(
      'repeat(auto-fit, minmax(250px, 400px))',
    )
  })
})

describe('buildColumnsWithVars', () => {
  it('builds CSS variable based columns', () => {
    expect(buildColumnsWithVars(baseConfig)).toBe(
      'repeat(auto-fit, minmax(var(--fitgrid-min), var(--fitgrid-max)))',
    )
  })

  it('applies maxColumns with CSS variables', () => {
    expect(buildColumnsWithVars({ ...baseConfig, maxColumns: 4 })).toBe(
      'repeat(auto-fit, minmax(max(var(--fitgrid-min), calc((100% - var(--fitgrid-gap) * 3) / 4)), var(--fitgrid-max)))',
    )
  })
})
