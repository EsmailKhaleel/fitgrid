import type { GridConfig, GridTailwindResult } from './types.js'
import { gridVars } from './gridVars.js'

export const GRID_TAILWIND_CLASSES =
  'grid gap-[var(--fitgrid-gap)] [grid-template-columns:var(--fitgrid-columns)]'

export function gridTailwind(config: GridConfig = {}): GridTailwindResult {
  const style = gridVars(config)

  return {
    className: GRID_TAILWIND_CLASSES,
    style: style as GridTailwindResult['style'],
  }
}
