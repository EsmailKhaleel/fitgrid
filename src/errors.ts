export class GridError extends Error {
  readonly name = 'GridError'

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, GridError.prototype)
  }
}

export function gridError(message: string): never {
  throw new GridError(message)
}
