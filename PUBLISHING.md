# Publishing fitgrid

## Name availability

Both names are **available** on npm (404 from `npm view` = not taken yet):

- `fitgrid` — recommended (matches your codebase, CSS vars, and demo)
- `container-grid` — also free, but would require a full rename

## Pre-publish checklist

| Item | Status |
|------|--------|
| Build (`dist/`) | Run `npm run build` |
| Types (`.d.ts`) | Included in `dist/` |
| Tests | Run `npm test` (42 passing) |
| No `console.log` | Verified |
| Bundle size | ~959 B gzipped (under 1 KB) |
| Tarball contents | Run `npm pack --dry-run` — only `dist/`, README, LICENSE, package.json |
| `author` field | Esmail Khaleel |
| `repository` field | https://github.com/EsmailKhaleel/fitgrid |

## Publish steps

```bash
cd fitgrid

# 1. Log in (once)
npm login

# 2. Final verification
npm run build
npm test
npm pack --dry-run

# 3. Inspect tarball (optional)
npm pack
tar -tf fitgrid-1.1.0.tgz

# 4. Publish
npm publish --access public

# 5. Verify
npm view fitgrid
```

Open: https://www.npmjs.com/package/fitgrid

## After publish

1. Push to GitHub with README + demo in `frontend/`
2. Run demo locally: `cd frontend && npm run dev`
3. Share using templates in [`LAUNCH.md`](LAUNCH.md)

## Install test (after publish)

```bash
npm install fitgrid
```

```tsx
import { grid } from 'fitgrid'
console.log(grid({ min: 250 }))
```
