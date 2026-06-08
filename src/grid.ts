import type { GridConfig, GridStyles } from './types.js'
import { buildColumns } from './buildColumns.js'
import { validateAndNormalize } from './validate.js'

export function buildGridStyles(config: GridConfig = {}): GridStyles {
  const normalized = validateAndNormalize(config)

  return {
    display: 'grid',
    gridTemplateColumns: buildColumns(normalized),
    gap: normalized.gap,
  }
}
