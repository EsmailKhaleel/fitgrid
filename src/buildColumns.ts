import type { NormalizedGridConfig } from './types.js'
import { CSS_VAR_GAP, CSS_VAR_MAX, CSS_VAR_MIN } from './constants.js'

function repeatKeyword(mode: NormalizedGridConfig['mode']): 'auto-fit' | 'auto-fill' {
  return mode === 'fill' ? 'auto-fill' : 'auto-fit'
}

function minTrack(config: NormalizedGridConfig, minValue: string): string {
  if (config.maxColumns !== undefined) {
    const gapCount = config.maxColumns - 1
    return `max(${minValue}, calc((100% - ${config.gap} * ${gapCount}) / ${config.maxColumns}))`
  }
  return minValue
}

export function buildColumns(config: NormalizedGridConfig): string {
  const repeat = repeatKeyword(config.mode)
  const min = minTrack(config, config.min)
  return `repeat(${repeat}, minmax(${min}, ${config.max}))`
}

export function buildColumnsWithVars(config: NormalizedGridConfig): string {
  const repeat = repeatKeyword(config.mode)

  if (config.maxColumns !== undefined) {
    const gapCount = config.maxColumns - 1
    return `repeat(${repeat}, minmax(max(var(${CSS_VAR_MIN}), calc((100% - var(${CSS_VAR_GAP}) * ${gapCount}) / ${config.maxColumns})), var(${CSS_VAR_MAX})))`
  }

  return `repeat(${repeat}, minmax(var(${CSS_VAR_MIN}), var(${CSS_VAR_MAX})))`
}
