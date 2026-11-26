# Pump Hydraulics Engineering Suite

Engineering calculation workspace with V5.0 single-line hydraulics and V5.1.2 deployment-path stabilization.

## V5.1.2 — Deployment-path stabilization
- Three.js import-map URLs now resolve from a version-pinned CDN rather than an Express-only `/vendor/three` route. This supports static Vercel hosting and Electron's `file://` renderer without relying on an unshipped `node_modules` directory.
- Build/lint syntax checks include the ES-module 3D renderer.
- Added deployment-configuration regression checks for the import map, output directory, and renderer entry point.
- The 3D renderer requires network access to jsDelivr. Offline desktop operation requires vendoring Three.js locally.

## V5.1.1 — Engineering verification and input hardening
- Serial suction/discharge line made of segments with different internal diameters, lengths and roughness.
- Segment-specific fitting/valve K totals and user-entered equipment pressure drops.
- Signed elevation changes and segment velocity-head changes.
- Segment-wise velocity, Reynolds number, Churchill Darcy friction factor, major/minor/equipment losses and pressure profile.
- Optional source and destination absolute-pressure boundaries and liquid vapour-pressure screening.
- Explicit units, strict numeric validation and separate configurable suction/discharge velocity screening limits.
- Hydraulic power and overall required head.

## Run and test
Requirements: Node.js 20+.

```bash
npm install
npm test
npm run build
```

The V5.1.1 multi-segment engine is available as `src/hydraulics-v5-1.js`; the static browser bundle is `app/hydraulics-v5-1.js`. The web UI is `app/index.html`.

## Vercel deployment
Import this repository into Vercel. Select Framework Preset **Other**, leave the build command blank, and set Output Directory to `app`. The 3D renderer loads Three.js 0.187.0 from jsDelivr, so the browser/deployment must permit that CDN.

## Desktop status
`main.js` and `preload.js` exist, but Electron/electron-builder dependencies and desktop packaging scripts are not declared. Desktop distribution is not release-ready. The CDN-based 3D renderer also requires network access.

## Release status
See [V5.1.2 stabilization and remaining gates](docs/V5_1_1_RELEASE_STATUS.md).

## Important limitations
This is a preliminary engineering aid, not certified engineering software or a code-compliance package. V5.1 is a single serial path, not a branched network solver. Fluid properties are constant; equipment pressure drop is a fixed user input; no pump curve, control-valve characteristic, transient surge, two-phase flow or network balancing is included. Independently validate all calculations and project-specific design criteria before engineering release.
