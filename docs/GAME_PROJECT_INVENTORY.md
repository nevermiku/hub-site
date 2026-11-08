# 三款游戏源码核查与归档

核查日期：2026-11-08  
仓库：`nevermiku/hub-site`  
核查范围：main 分支完整文件树（746 项）、仓库 56 条提交记录，以及当前账号可访问的其他 4 个仓库。

## 分项档案
- [游戏一：刀域突围 / SWORD BREAK](./games/01-SWORD-BREAK.md)
- [游戏二：回声 / ECHO](./games/02-ECHO.md)
- [游戏三：街尾之章 / NEXUS（源码待恢复）](./games/03-NEXUS-RECOVERY.md)

## 结论先说

目前在 GitHub 账号可访问的仓库中，**只定位到两款游戏的源码**：

1. 《刀域突围 / SWORD BREAK》：已找到旧版和 3D 版，属于同一款游戏的迭代版本。
2. 《回声 / ECHO》：已找到早期版、2D 链式解谜版和 3D 版，属于同一款游戏的不同版本/重制。
3. 《街尾之章 / NEXUS》：根据开发记录确认这是第三款游戏，但在目前可访问的 GitHub 仓库中没有找到其源码。不能把前两款游戏的额外版本误认成 NEXUS。

因此，目录数量多于三组，不代表做了更多游戏；其中多数是前两款游戏的旧版、重制版或独立部署入口。

## 游戏一：《刀域突围 / SWORD BREAK》

### 线上入口
- 3D 版：<https://nevermiku.github.io/hub-site/game3d/>
- 早期版：<https://nevermiku.github.io/hub-site/game/>

### 源码和资源
- `game3d/index.html` — 3D 版页面、UI 和入口
- `game3d/game.js` — 3D 版核心逻辑（955,039 bytes）
- `game3d/manifest.json` — PWA 配置
- `game3d/sw.js` — Service Worker 与缓存
- `game3d/icon-192.png`、`game3d/icon-512.png` — 图标
- `game3d/sfx/` — 23 个战斗、采集、脚步和落地音效
- `game/index.html` — 早期版完整游戏页面（330,323 bytes）
- `game/cloudbase.min.js` — CloudBase SDK
- `game/manifest.json`、`game/icon-192.png`、`game/icon-512.png`
- `game/assets/img/` — 场景背景、Boss、职业、怪物图片等 30 个资源文件

### 版本关系
提交记录显示，`game/` 是 2026-11-05 开始的早期 SWORD BREAK 版本；随后发展为 `game3d/` 下的 Three.js 3D 重制版。它们不是两款独立游戏。

## 游戏二：《回声 / ECHO》

### 线上入口
- 早期版：<https://nevermiku.github.io/hub-site/echo/>
- 2D 链式解谜版：<https://nevermiku.github.io/hub-site/echo2d/>
- 3D 版：<https://nevermiku.github.io/hub-site/echo3d/>

### 源码和资源
- `echo/index.html` — 早期三秒延迟回声玩法；该目录目前有页面、manifest 和图标，没有独立 game.js
- `echo/manifest.json`
- `echo/icon-192.png`、`echo/icon-512.png`
- `echo2d/index.html` — 2D 链式解谜版入口
- `echo2d/game.js` — 2D 核心逻辑（66,964 bytes）
- `echo2d/manifest.json`、`echo2d/sw.js`
- `echo2d/icon-192.png`、`echo2d/icon-512.png`
- `echo3d/index.html` — 3D 版入口
- `echo3d/game.js` — 3D 核心逻辑（675,595 bytes）
- `echo3d/manifest.json`、`echo3d/sw.js`
- `echo3d/icon-192.png`、`echo3d/icon-512.png`
- `echo3d/sfx/` — 23 个音效文件

### 版本关系
提交记录显示，早期 ECHO 是三秒延迟回声小游戏；后来新增了 2D 版《余响回廊》链式解谜，再新增 3D 版《浮空回廊》。这些是同一游戏品牌的版本/重制，不应计为第三款 NEXUS。

## 游戏三：《街尾之章 / NEXUS》

### 已知设计线索
- 三章剧情结构，逐章解锁。
- 逻辑推理题型包括四宫格、唯一真话、凯撒/密文破译。
- 有记忆系统、线索收集、结局判定。
- 最近一轮开发记录提到任务 #58–#64，涉及逻辑方阵、唯一真话、凯撒破译，以及 `verify_full` 等验证逻辑。

### 源码定位结果
- 在 `nevermiku/hub-site` 的完整 746 项文件树中，没有找到 NEXUS、街尾之章、推理、谜题等相关路径。
- 对该仓库执行代码关键词搜索，没有搜到 NEXUS、街尾之章、密文题面等代码命中。
- 检查该仓库 56 条提交记录，没有发现 NEXUS 的新增或更新记录。
- 另检查账号当前可访问的 `project-hub`、`quick-tools`、`live2d-gallery`、`hub-app` 仓库，也未发现明显的 NEXUS 文件目录。

**结论：NEXUS 的原始源码目前尚未在已检查的 GitHub 仓库中定位。** 这不代表代码已丢失；它可能仍在开发 APP 的云电脑工作区、另一个未授权仓库、未推送分支或本地工作目录。恢复时应以原始代码为准，不用新写的替代品覆盖。

## 为什么还有其他目录

- `game/` 与 `game3d/`：刀域突围的早期版与 3D 重制版。
- `echo/`、`echo2d/`、`echo3d/`：回声的早期版、2D 解谜版与 3D 版。
- 根目录 `assets/`、`audio/`、`chara/`、`l2d/`、`vendor/`：项目中枢的前端构建资源、语音、角色和 Live2D 模型资源，不是 NEXUS 游戏源码。
- `hub-app/`：项目中枢安装包及更新信息，不是游戏源码。

## 后续维护规则

1. 保留现有目录和 GitHub Pages 路径，暂不搬动或重命名线上文件。
2. 刀域、回声、NEXUS 各自独立维护；刀域与回声的不同版本也保留独立目录。
3. 修改游戏时同步检查 HTML、JS、图片/音效、manifest 和 Service Worker 缓存版本。
4. NEXUS 找回前只记录恢复状态，不创建假目录或替代游戏。
5. 国内访问部署单独处理，不改变 GitHub 源码仓库；优先评估腾讯云 EdgeOne Pages 或 CloudBase 静态网站托管，并在确认账号、费用和域名条件后再迁移。
