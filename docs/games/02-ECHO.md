# 游戏 02：回声 / ECHO

## 线上版本
- 早期延迟回声版：https://nevermiku.github.io/hub-site/echo/
- 2D 链式解谜版：https://nevermiku.github.io/hub-site/echo2d/
- 3D 浮空回廊版：https://nevermiku.github.io/hub-site/echo3d/

## 早期版本（echo/）
- index.html — 三秒延迟回声玩法主体
- manifest.json
- icon-192.png、icon-512.png
- 当前目录没有独立 game.js，主要逻辑内嵌于 index.html。

## 2D 版本（echo2d/）
- index.html — 2D 链式解谜页面
- game.js — 核心逻辑，66,964 bytes
- manifest.json
- sw.js
- icon-192.png、icon-512.png

## 3D 版本（echo3d/）
- index.html — 3D 浮空回廊入口
- game.js — 核心逻辑，675,595 bytes
- manifest.json
- sw.js
- icon-192.png、icon-512.png
- sfx/ — 23 个 OGG 音效

## 维护说明
三个目录是 ECHO 的早期版、2D 解谜版和 3D 版，不应当成三款独立游戏。保留每个目录和线上路径，后续分别维护。
