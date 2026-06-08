import type { GridAutoFn, GridConfig, GridFn, GridLength, GridStyles } from './types.js'
import { buildGridStyles } from './grid.js'
import { gridTailwind } from './gridTailwind.js'

function isGridConfig(value: GridLength | GridConfig): value is GridConfig {
  return typeof value === 'object'
}

function autoImpl(minOrConfig?: GridLength | GridConfig, gap?: GridLength): GridStyles {
  if (minOrConfig === undefined) {
    return buildGridStyles()
  }

  if (isGridConfig(minOrConfig)) {
    return buildGridStyles(minOrConfig)
  }

  if (gap !== undefined) {
    return buildGridStyles({ min: minOrConfig, gap })
  }

  return buildGridStyles({ min: minOrConfig })
}

export function createGridFn(): GridFn {
  const gridFn = ((config?: GridConfig) => buildGridStyles(config)) as GridFn
  gridFn.auto = autoImpl as GridAutoFn
  gridFn.tailwind = gridTailwind
  return gridFn
}
