# V5.1.2 Release Status

**Release:** V5.1.2 deployment-path stabilization  
**Branch:** `fix/v5.1.2-deployment-stabilization`

## Changes in this branch
- Replaced Express-only absolute Three.js vendor paths with version-pinned jsDelivr module URLs. The import map can resolve in Vercel static hosting and Electron `file://` mode.
- Added syntax validation for the 3D ES module to build and lint scripts.
- Added automated configuration checks for the Three.js import map, Vercel output directory, and module entry point.
- Updated deployment documentation to state the CDN network dependency and remaining desktop packaging work.

## Verification required
- Run `npm install`, `npm test`, and `npm run build` on Node.js 20.
- Deploy a Vercel preview and verify browser console, default calculation, boundary-pressure case, and 3D viewport.
- Test Electron only after adding and locking the Electron toolchain. The repository still lacks Electron/electron-builder dependencies and scripts.
- Test offline desktop only after Three.js is vendored locally.

## Outstanding release administration
1. **Dependency lockfile:** `package-lock.json` remains outstanding. Generate it with the selected Node/npm toolchain before relying on reproducible installs.
2. **Software license:** No license has been selected or added. Repository owner decision required.
3. **Electron packaging:** `main.js`/`preload.js` exist, but Electron and electron-builder are not declared and packaging scripts are absent.
4. **Live deployment:** No live Vercel deployment has been tested by this change.
5. **Engineering sign-off:** Validate project-specific design criteria, source data, fluid properties, pump performance and NPSH before engineering use.

## Model limitations
The hydraulic engine remains a steady, incompressible, single-phase Newtonian-liquid model for one serial flow path. It is not a branched network solver. Pump curves, operating points, NPSHa/NPSHr, detailed cavitation, water hammer, transient analysis and certified API/ANSI-HI compliance are not implemented.
