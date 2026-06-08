# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-06-08

### Added

- `twGrid` alias — identical to `grid` (same reference, zero duplication)
- `grid.auto()` / `twGrid.auto()` — shorthand API (`auto(250)`, `auto('16rem')`, `auto(250, 16)`)
- `grid.tailwind()` / `twGrid.tailwind()` — returns `{ className, style }` for Tailwind projects
- `GRID_TAILWIND_CLASSES` constant for manual Tailwind wiring
- `GridFn`, `GridAutoFn`, `GridTailwindResult` TypeScript types

### Changed

- README rewritten with pain → magic → result narrative and container-first positioning
- Public API now exposes callable `grid` with attached `.auto()` and `.tailwind()` methods

## [1.0.0] - 2026-06-08

### Added

- `grid()` — main utility returning CSS Grid style objects
- `gridVars()` — Tailwind-friendly CSS custom property output
- `GridError` — typed validation errors with clear messages
- Support for `min`, `gap`, `mode`, `max`, and `maxColumns` options
- Zero runtime dependencies
- Full TypeScript support with ESM and CJS builds
