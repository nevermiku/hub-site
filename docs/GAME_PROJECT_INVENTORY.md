# Game Project Inventory

This inventory is based on the actual `main` branch tree of `nevermiku/hub-site`.
The maintenance branch was created separately; no files on `main` have been changed.

## 1. 刀域突围 3D

- Live URL: https://nevermiku.github.io/hub-site/game3d/
- Source directory: `game3d/`
- Entry: `game3d/index.html`
- Main logic: `game3d/game.js` (955,039 bytes)
- PWA: `game3d/manifest.json`, `game3d/sw.js`
- Assets: `game3d/icon-192.png`, `game3d/icon-512.png`, and 23 sound files in `game3d/sfx/`
- HTML title verified from source: 刀域突围 3D · 百层浮游城

## 2. 回声 ECHO 2D

- Live URL: https://nevermiku.github.io/hub-site/echo2d/
- Source directory: `echo2d/`
- Entry: `echo2d/index.html`
- Main logic: `echo2d/game.js` (66,964 bytes)
- PWA: `echo2d/manifest.json`, `echo2d/sw.js`
- Assets: `echo2d/icon-192.png`, `echo2d/icon-512.png`
- HTML title verified from source: 回声 ECHO 2D · 余响回廊

## 3. Additional game variants / related directories

These exist in the repository but are not to be mistaken for NEXUS:

- `game/`: another 刀域突围 / SWORD BREAK version. Its HTML title is 刀域突围 · SWORD BREAK — 百层浮游城. Includes a large `index.html` and `cloudbase.min.js`, plus image assets.
- `echo/`: another 回声 · ECHO page variant; it has `index.html`, manifest and icons, but no separate `game.js` in this directory.
- `echo3d/`: 回声 ECHO 3D · 浮空回廊, with its own `game.js` (675,595 bytes), entry HTML, PWA files and SFX.

## 4. 街尾之章 / NEXUS — recovery status

- Searched the complete current `main` tree (746 entries) for `nexus`, `街尾`, `mystery`, `puzzle`, and `推理`: no matching path found.
- Also checked repository code search and commit-message searches for NEXUS / 街尾之章 / 推理-related terms; no matching result was found.
- Therefore NEXUS source is **not yet located in this repository**. This does not prove it is deleted; it may be in another repository, an unpushed workspace, or under an unrelated directory/name.
- Do not relabel `game/`, `echo/`, or `echo3d/` as NEXUS without source evidence.

## 5. Safe maintenance rules

1. Keep each game in its own directory and preserve the existing public paths.
2. Do not change `main` directly during investigation. Review and test changes on a maintenance branch first.
3. When changing cached assets, update the matching service-worker cache version.
4. Before publishing, test each game on mobile and desktop and verify all asset URLs.
5. Recover NEXUS from its original repository/workspace before making replacement code.

Last checked against the GitHub repository tree: 2026-11-08.
