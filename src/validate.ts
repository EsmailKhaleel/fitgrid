import type { GridConfig, NormalizedGridConfig } from './types.js'
import { DEFAULT_GAP, DEFAULT_MAX, DEFAULT_MIN, DEFAULT_MODE } from './constants.js'
import { normalizeLength, normalizeMaxColumns, normalizeMode } from './normalize.js'

export function validateAndNormalize(config: GridConfig = {}): NormalizedGridConfig {
  const min = normalizeLength(config.min ?? DEFAULT_MIN, 'min')
  const gap = normalizeLength(config.gap ?? DEFAULT_GAP, 'gap', { allowZero: true })
  const max = normalizeLength(config.max ?? DEFAULT_MAX, 'max', { allowZero: true })
  const mode = normalizeMode(config.mode ?? DEFAULT_MODE)
  const maxColumns = normalizeMaxColumns(config.maxColumns, 'maxColumns')
  const minColumns = normalizeMaxColumns(config.minColumns, 'minColumns')

  return {
    min,
    gap,
    mode,
    max,
    maxColumns,
    minColumns,
  }
}
