# 游戏 01：刀域突围 / SWORD BREAK

## 线上版本
- 3D 主版本：https://nevermiku.github.io/hub-site/game3d/
- 早期版本：https://nevermiku.github.io/hub-site/game/

## 3D 主版本文件（game3d/）
- index.html — 页面入口与 UI
- game.js — 核心逻辑，955,039 bytes
- manifest.json — PWA 配置
- sw.js — Service Worker
- icon-192.png、icon-512.png — 图标
- sfx/ — 23 个 OGG 音效（命中、格挡、采集、脚步、落地等）

## 早期版本文件（game/）
- index.html — 完整游戏页面与主要逻辑，330,323 bytes
- cloudbase.min.js — CloudBase SDK
- manifest.json
- icon-192.png、icon-512.png
- assets/img/ — 30 个场景、Boss、职业和怪物图像资源（含子目录 manifest）

## 维护说明
两个目录属于同一款游戏的迭代版本，不是两款不同游戏。线上路径暂时保留；更新 3D 版时以 game3d/ 为主，不删除 game/ 历史版本。
