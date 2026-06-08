export type GridMode = 'fit' | 'fill'

export type GridLength = number | string

export interface GridConfig {
  /** Minimum column width before wrapping. Default: 250 */
  min?: GridLength
  /** Spacing between items. Default: 16 */
  gap?: GridLength
  /** auto-fit (stretch) vs auto-fill (leave empty tracks). Default: 'fit' */
  mode?: GridMode
  /** Max track size passed to minmax(). Default: '1fr' */
  max?: GridLength
  /** Cap column count via calc-based min width */
  maxColumns?: number
  /** Floor column count (reserved for future use) */
  minColumns?: number
}

export interface GridStyles {
  display: 'grid'
  gridTemplateColumns: string
  gap: string
}

export interface GridVarStyles {
  '--fitgrid-min': string
  '--fitgrid-gap': string
  '--fitgrid-max': string
  '--fitgrid-columns': string
}

export interface GridTailwindResult {
  className: string
  style: GridVarStyles & Record<string, string>
}

export interface GridAutoFn {
  (): GridStyles
  (config: GridConfig): GridStyles
  (min: GridLength): GridStyles
  (min: GridLength, gap: GridLength): GridStyles
}

export interface GridFn {
  (config?: GridConfig): GridStyles
  auto: GridAutoFn
  tailwind: (config?: GridConfig) => GridTailwindResult
}

export interface NormalizedGridConfig {
  min: string
  gap: string
  mode: GridMode
  max: string
  maxColumns?: number
  minColumns?: number
}
