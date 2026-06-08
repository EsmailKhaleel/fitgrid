import { createGridFn } from './createGridFn.js'

const gridFn = createGridFn()

export { gridFn as grid, gridFn as twGrid }
export { gridVars } from './gridVars.js'
export { gridTailwind, GRID_TAILWIND_CLASSES } from './gridTailwind.js'
export { buildGridStyles } from './grid.js'
export { GridError } from './errors.js'
export type {
  GridAutoFn,
  GridConfig,
  GridFn,
  GridLength,
  GridMode,
  GridStyles,
  GridTailwindResult,
  GridVarStyles,
} from './types.js'
