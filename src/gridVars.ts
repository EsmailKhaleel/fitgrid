import type { GridConfig, GridVarStyles } from './types.js'
import { buildColumnsWithVars } from './buildColumns.js'
import {
  CSS_VAR_COLUMNS,
  CSS_VAR_GAP,
  CSS_VAR_MAX,
  CSS_VAR_MIN,
} from './constants.js'
import { validateAndNormalize } from './validate.js'

export function gridVars(config: GridConfig = {}): GridVarStyles {
  const normalized = validateAndNormalize(config)

  return {
    [CSS_VAR_MIN]: normalized.min,
    [CSS_VAR_GAP]: normalized.gap,
    [CSS_VAR_MAX]: normalized.max,
    [CSS_VAR_COLUMNS]: buildColumnsWithVars(normalized),
  }
}
