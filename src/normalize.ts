import type { GridLength } from './types.js'
import { gridError } from './errors.js'

export function normalizeLength(
  value: GridLength,
  optionName: string,
  { allowZero = false }: { allowZero?: boolean } = {},
): string {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      gridError(`${optionName} must be a finite number (received: ${value})`)
    }
    if (value < 0 || (!allowZero && value === 0)) {
      gridError(
        allowZero
          ? `${optionName} cannot be negative (received: ${value})`
          : `${optionName} must be a positive number or CSS length (received: ${value})`,
      )
    }
    return `${value}px`
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) {
      gridError(`${optionName} must be a non-empty CSS length (received: empty string)`)
    }
    return trimmed
  }

  gridError(`${optionName} must be a number or CSS length (received: ${typeof value})`)
}

export function normalizeMode(mode: unknown): 'fit' | 'fill' {
  if (mode === undefined) {
    return 'fit'
  }
  if (mode === 'fit' || mode === 'fill') {
    return mode
  }
  gridError(`mode must be "fit" or "fill" (received: ${String(mode)})`)
}

export function normalizeMaxColumns(value: unknown, optionName: string): number | undefined {
  if (value === undefined) {
    return undefined
  }
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value) || value <= 0) {
    gridError(`${optionName} must be a positive integer (received: ${String(value)})`)
  }
  return value
}
