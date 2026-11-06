/* ============================================================
   回声 ECHO 2D · 余响回廊
   一环扣一环的链式解谜：声波沿镜面折行，按顺序点亮记忆节点，
   每点亮一枚就会打开它后面的门，前一步的余响是后一步的钥匙。
   关卡由「先构造可解路径、再打乱机关」生成，并逐关自动验证可解。
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 常量 ---------------- */
  const FREQ = [
    { n: '青', c: '#7fe3ff', dim: 'rgba(127,227,255,' },
    { n: '橙', c: '#ffb26b', dim: 'rgba(255,178,107,' },
    { n: '紫', c: '#c79cff', dim: 'rgba(199,156,255,' }
  ];
  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];   // 上 右 下 左
  const CHAP = ['第一章 · 初响', '第二章 · 折返', '第三章 · 调律', '第四章 · 连锁', '第五章 · 归寂'];
  // 章节配色：每章一套天空/辉光/强调色，切换关卡时整体氛围随之变化
  const CHAP_COL = [
    { a: '#0a2236', b: '#0a1526', glow: '#3a9fd0', accent: '#7fe3ff' }, // 初响 · 青
    { a: '#10222e', b: '#0a1622', glow: '#c87a3a', accent: '#ffb26b' }, // 折返 · 橙
    { a: '#191333', b: '#0d1020', glow: '#7a5cc8', accent: '#c79cff' }, // 调律 · 紫
    { a: '#08222a', b: '#08131c', glow: '#2fa080', accent: '#7fe0a0' }, // 连锁 · 绿
    { a: '#0c0c1c', b: '#06060f', glow: '#8890d8', accent: '#aab8ff' }  // 归寂 · 蓝紫
  ];
  const CHAP_DESC = ['转动镜面，让回声学会拐弯', '频率开始分化，颜色必须对上',
                     '更多记忆，更长的连锁', '一环断，则环环皆断', '把每一段延迟都收回自己身上'];
  const LV_NAME = ['无声回廊', '第一折', '两面之镜', '回身', '折光', '门后有声',
                   '青与橙', '错频', '三色阶', '调律者', '逆行', '双生回响',
                   '三环', '锁链', '长廊', '回声室', '交叠', '未至之音',
                   '四重门', '迟到的拍子', '镜中镜', '断章', '余响', '闭环',
                   '五重奏', '静默之前', '倒影', '最后一次折返', '同频', '回声结束'];
  const STORY = [
    '你在一片没有声音的白色空间醒来。脚下有石板，远方有光，但没有来路。',
    '第一声脚步落下时，墙把它还了回来——晚了半拍，却一字不差。',
    '你终于明白：这里的每一面镜子，都是某个人没说完的话。',
    '转折不是逃避方向，而是让声音有机会再走一遍。',
    '有些光要折两次，才肯落到该落的地方。',
    '门从不上锁。它只是在等一个正确的顺序。',
    '回声开始有颜色了。青的往前，橙的往回，紫的停在原地。',
    '错一个音，整段旋律就散在半空。',
    '三种频率叠在一起，居然是你小时候哼过的调子。',
    '调律不是改变声音，是改变愿意听它的人。',
    '逆着走一遍，才发现来路本来就是出口。',
    '两个你同时开口，这里却只容得下一声回答。',
    '第三枚记忆亮起时，第二枚才轻轻合上眼。',
    '锁链是环环相扣的，解开一环，其余的才肯松手。',
    '长廊没有尽头，只有还没被点亮的下一格。',
    '这间屋子把你三秒前说过的话，原封不动递了回来。',
    '两条回声交叠的瞬间，你听见了两个自己的和声。',
    '有些话还没出口，就已经有了回声。',
    '四重门依次打开，像一个人终于肯把心事说完。',
    '迟到的那一拍，其实一直在等你放慢脚步。',
    '镜子里还有一面镜子，尽头站着一个不肯转身的你。',
    '断掉的那一段，恰恰是整首曲子的呼吸。',
    '余响比声音更长，也比声音更诚实。',
    '闭环合上的一刻，起点和终点终于同时落在脚下。',
    '五个音依次归位，白色空间第一次有了回声的形状。',
    '静默不是没有声音，是所有声音都回到了该在的位置。',
    '倒影里的你先迈了步，你才跟着走。',
    '最后一次折返，你没有回头。',
    '最后一声脚步和你的动作同时落下——从这一刻起，声音才第一次属于你。',
    '你走完了全部回廊，把每一段延迟都收回了自己身上。'
  ];
  const TOTAL = 30;
  const SAVE_KEY = 'echo2d_save_v1';

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const reflect = (dx, dy, st) => st === 0 ? [-dy, -dx] : [dy, dx];
  function mirrorStateFor(fd, td) {
    const f = DIRS[fd], t = DIRS[td];
    for (const st of [0, 1]) {
      const r = reflect(f[0], f[1], st);
      if (r[0] === t[0] && r[1] === t[1]) return st;
    }
    return null;
  }
  const keyOf = (x, y, n) => y * n + x;

  /* ---------------- 模拟器（纯函数：既用于验证也用于播放） ---------------- */
  function simulate(level, cfg) {
    const n = level.n;
    const cells = {};
    for (const c of level.cells) {
      cells[keyOf(c.x, c.y, n)] = {
        ...c,
        state: c.type === 'mirror' ? (cfg.mirrors[keyOf(c.x, c.y, n)] ?? c.init)
             : c.type === 'tuner' ? (cfg.tuners[keyOf(c.x, c.y, n)] ?? c.init) : 0
      };
    }
    const sd = DIRS[level.src.dir];
    let waves = [{ x: level.src.x, y: level.src.y, dx: sd[0], dy: sd[1], freq: level.src.freq, trail: [] }];
    const openGates = new Set();
    let nextNode = 1;
    const activated = [];
    const trace = [{ waves: waves.map(w => ({ ...w })), events: [] }];

    for (let tick = 1; tick < 140; tick++) {
      const events = [], nw = [];
      for (const w of waves) {
        const nx = w.x + w.dx, ny = w.y + w.dy;
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) { events.push({ t: 'die', x: w.x, y: w.y }); continue; }
        const c = cells[keyOf(nx, ny, n)];
        const trail = [...w.trail, { x: w.x, y: w.y }].slice(-8);
        if (!c) { nw.push({ x: nx, y: ny, dx: w.dx, dy: w.dy, freq: w.freq, trail }); continue; }
        if (c.type === 'wall') { events.push({ t: 'block', x: nx, y: ny }); continue; }
        if (c.type === 'gate' && !openGates.has(c.id)) { events.push({ t: 'gate', x: nx, y: ny, id: c.id }); continue; }
        if (c.type === 'node' && (c.id > nextNode)) { events.push({ t: 'locked', x: nx, y: ny, id: c.id }); continue; }
        let dx = w.dx, dy = w.dy, freq = w.freq;
        if (c.type === 'mirror') {
          const r = reflect(dx, dy, c.state); dx = r[0]; dy = r[1];
          events.push({ t: 'bounce', x: nx, y: ny, state: c.state });
        } else if (c.type === 'tuner') {
          freq = c.state; events.push({ t: 'tune', x: nx, y: ny, freq });
        } else if (c.type === 'node') {
          if (freq !== c.freq) { events.push({ t: 'wrong', x: nx, y: ny, id: c.id, freq }); continue; }
          activated.push(c.id); nextNode++; openGates.add(c.id);
          events.push({ t: 'node', x: nx, y: ny, id: c.id, freq });
        } else if (c.type === 'exit') {
          if (activated.length === level.nodeCount) {
            trace.push({ waves: [], events });
            return { win: true, trace, activated };
          }
          events.push({ t: 'exitClosed', x: nx, y: ny });
          continue;
        }
        nw.push({ x: nx, y: ny, dx, dy, freq, trail });
        if (nw.length > 400) break;
      }
      waves = nw;
      trace.push({ waves: waves.map(w => ({ ...w })), events });
      if (!waves.length) break;
    }
    return { win: false, trace, activated };
  }

  /* ---------------- 关卡生成：先造可解路径，再打乱机关 ---------------- */
  function tryBuild(idx, n, nodeCount, tunerCount, chapter, salt) {
    const rng = mulberry32(idx * 7919 + salt * 104729 + 17);
    const segCount = 4 + Math.floor(rng() * 4) + Math.min(2, chapter);
    const path = [], used = new Set(), mirrorAt = new Map();
    let x = 0, y = 1 + Math.floor(rng() * (n - 2)), dir = 1;
    const startY = y;
    for (let s = 0; s < segCount; s++) {
      // 后期章节路径更长，保证节点与门有足够落点
      const len = 1 + Math.floor(rng() * 3) + (chapter >= 3 ? 1 : 0);
      for (let k = 0; k < len; k++) {
        x += DIRS[dir][0]; y += DIRS[dir][1];
        if (x < 0 || y < 0 || x >= n || y >= n || used.has(keyOf(x, y, n))) return null;
        used.add(keyOf(x, y, n)); path.push({ x, y });
      }
      if (s < segCount - 1) {
        const nd = (dir + (rng() < .5 ? 1 : 3)) % 4;
        const st = mirrorStateFor(dir, nd);
        if (st === null) return null;
        mirrorAt.set(keyOf(x, y, n), st);
        dir = nd;
      }
    }
    const L = path.length;
    if (L < nodeCount * 3 + 3) return null;

    // 节点：沿路径均匀分布，避开镜面与末尾出口
    const nodeIdx = [];
    for (let k = 0; k < nodeCount; k++) {
      let w = Math.floor((k + .7) * (L - 2) / (nodeCount + .4)) + 1;
      w = Math.max(1, Math.min(L - 2, w));
      let guard = 0;
      while ((nodeIdx.includes(w) || mirrorAt.has(keyOf(path[w].x, path[w].y, n))) && guard++ < 12) w++;
      if (w >= L - 1 || nodeIdx.includes(w)) return null;
      nodeIdx.push(w);
    }
    nodeIdx.sort((a, b) => a - b);

    // 显式门：夹在相邻节点之间，node k 激活后打开 id=k 的门
    const gates = [];
    const gateIdx = [];
    for (let k = 1; k <= nodeCount - 1; k++) {
      const a = nodeIdx[k - 1], b = nodeIdx[k];
      if (b - a < 2) continue;
      let g = a + 1;
      while (g < b && (mirrorAt.has(keyOf(path[g].x, path[g].y, n)) || gateIdx.includes(g))) g++;
      if (g < b) { gateIdx.push(g); gates.push({ idx: g, id: k }); }
    }

    // 调频器：放在路径上非关键格，solution 随机、init 必与之不同
    const tunerIdx = [];
    const candidates = [];
    for (let i = 1; i < L - 1; i++) {
      if (nodeIdx.includes(i) || gateIdx.includes(i) || mirrorAt.has(keyOf(path[i].x, path[i].y, n))) continue;
      candidates.push(i);
    }
    for (let k = 0; k < tunerCount && candidates.length; k++) {
      const pickAt = Math.floor(rng() * candidates.length);
      tunerIdx.push(candidates.splice(pickAt, 1)[0]);
    }
    const sol = { mirrors: {}, tuners: {} };
    const init = { mirrors: {}, tuners: {} };
    for (const [k, st] of mirrorAt) {
      sol.mirrors[k] = st;
      init.mirrors[k] = rng() < .5 ? st : 1 - st;
    }
    let anyDiff = Object.keys(sol.mirrors).some(k => init.mirrors[k] !== sol.mirrors[k]);
    for (const i of tunerIdx) {
      const k = keyOf(path[i].x, path[i].y, n);
      const v = Math.floor(rng() * 3);
      sol.tuners[k] = v;
      init.tuners[k] = (v + 1 + Math.floor(rng() * 2)) % 3;
      anyDiff = true;
    }
    if (!anyDiff) {
      const fk = Object.keys(sol.mirrors)[0];
      if (fk !== undefined) init.mirrors[fk] = 1 - sol.mirrors[fk];
    }

    // 节点频率 = 按正确调频器走完全程时到达该节点的颜色
    const tunerByKey = {};
    for (const i of tunerIdx) tunerByKey[keyOf(path[i].x, path[i].y, n)] = sol.tuners[keyOf(path[i].x, path[i].y, n)];
    let cur = 0;
    const nodeFreq = {};
    for (let i = 0; i < L; i++) {
      const k = keyOf(path[i].x, path[i].y, n);
      if (k in tunerByKey) cur = tunerByKey[k];
      if (nodeIdx.includes(i)) nodeFreq[i] = cur;
    }

    const cells = [];
    for (const [k, st] of mirrorAt) cells.push({ type: 'mirror', x: k % n, y: Math.floor(k / n), init: init.mirrors[k] });
    for (const g of gates) cells.push({ type: 'gate', x: path[g.idx].x, y: path[g.idx].y, id: g.id });
    for (const i of tunerIdx) cells.push({ type: 'tuner', x: path[i].x, y: path[i].y, init: init.tuners[keyOf(path[i].x, path[i].y, n)] });
    nodeIdx.forEach((i, q) => cells.push({ type: 'node', x: path[i].x, y: path[i].y, id: q + 1, freq: nodeFreq[i] }));
    cells.push({ type: 'source', x: 0, y: startY });
    cells.push({ type: 'exit', x: path[L - 1].x, y: path[L - 1].y });

    // 装饰墙：不放在路径上，只增加视觉层次与迷惑性
    const wallCount = 5 + chapter * 3;
    for (let k = 0; k < wallCount; k++) {
      const wx = Math.floor(rng() * n), wy = Math.floor(rng() * n);
      if (used.has(keyOf(wx, wy, n)) || wx === 0) continue;
      if (cells.some(c => c.x === wx && c.y === wy)) continue;
      cells.push({ type: 'wall', x: wx, y: wy });
    }

    const level = {
      idx, n, chapter, nodeCount, cells, path, solution: sol, init,
      src: { x: 0, y: startY, dir: 1, freq: 0 },
      name: LV_NAME[(idx - 1) % LV_NAME.length],
      story: STORY[(idx - 1) % STORY.length]
    };
    return simulate(level, level.solution).win ? level : null;
  }

  function genLevel(idx) {
    const chapter = Math.min(4, Math.floor((idx - 1) / 6));
    const n = chapter <= 1 ? 7 : chapter === 2 ? 8 : 9;
    const nodeCount = 2 + chapter;
    const tunerCount = chapter === 0 ? 0 : Math.min(3, chapter);
    for (let salt = 0; salt < 2000; salt++) {
      const lv = tryBuild(idx, n, nodeCount, tunerCount, chapter, salt);
      if (lv) return lv;
    }
    // 兜底：一条直线，节点顺序点亮，必定可解
    const cells = [];
    for (let i = 1; i <= nodeCount; i++) cells.push({ type: 'node', x: i + 1, y: 3, id: i, freq: 0 });
    cells.push({ type: 'source', x: 0, y: 3 }, { type: 'exit', x: n - 1, y: 3 });
    const sol = { mirrors: {}, tuners: {} };
    return { idx, n, chapter, nodeCount, cells, path: [], solution: sol, init: sol,
             src: { x: 0, y: 3, dir: 1, freq: 0 },
             name: LV_NAME[(idx - 1) % LV_NAME.length], story: STORY[(idx - 1) % STORY.length] };
  }

  /* ---------------- 状态 ---------------- */
  const S = {
    lv: 1, level: null, cfg: null, history: [], moves: 0,
    playing: false, trace: null, tick: 0, lastAdvance: 0, speed: 1,
    activated: [], won: false, hintKey: -1, hintUntil: 0, fx: [], parts: [], beat: 0,
    save: loadSave()
  };
  function loadSave() {
    try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s && s.cleared) return s; } catch (e) {}
    return { cleared: {}, best: {}, cur: 1 };
  }
  function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(S.save)); } catch (e) {} }

  const $ = id => document.getElementById(id);
  const cv = $('cv'), ctx = cv.getContext('2d');
  let W = 0, H = 0, cell = 40, ox = 0, oy = 0;

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layout();
  }
  function layout() {
    if (!S.level) return;
    const n = S.level.n;
    const availW = W - 36, availH = H - (H < 500 ? 150 : 200);
    cell = Math.max(28, Math.min(availW / n, availH / n, 76));
    ox = (W - cell * n) / 2;
    oy = Math.max(96, (H - cell * n) / 2 - 10);
  }
  window.addEventListener('resize', resize);

  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function glow(color, blur) { ctx.shadowColor = color; ctx.shadowBlur = blur; }
  function noGlow() { ctx.shadowBlur = 0; }
  function hexA(hex, a) {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  // 激活时迸发的粒子（网格坐标 → 屏幕像素）
  function addParts(gx, gy, color, n = 14) {
    const x = ox + gx * cell + cell / 2, y = oy + gy * cell + cell / 2;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = .6 + Math.random() * 1.9;
      S.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - .5,
        life: 460 + Math.random() * 160, max: 620, c: color, r: 1.3 + Math.random() * 2.2 });
    }
  }

  /* ---------------- 绘制 ---------------- */
  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    const pal = CHAP_COL[S.level ? S.level.chapter : 0] || CHAP_COL[0];
    // 背景：章节配色渐变 + 中央柔光
    const g = ctx.createLinearGradient(0, 0, W * .45, H);
    g.addColorStop(0, pal.a); g.addColorStop(.6, pal.b); g.addColorStop(1, '#05080f');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const rg = ctx.createRadialGradient(W / 2, H * .42, 0, W / 2, H * .42, Math.max(W, H) * .62);
    rg.addColorStop(0, hexA(pal.glow, .16)); rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    // 漂移光尘
    for (let i = 0; i < 60; i++) {
      const bx = (i * 137.5) % W, by = (i * 71.3) % H;
      const dx = Math.sin(now / 2600 + i * 1.7) * 22, dy = Math.cos(now / 3200 + i * 1.3) * 16;
      ctx.fillStyle = hexA(pal.accent, .05 + .05 * Math.sin(now / 900 + i));
      const sz = 1.2 + (i % 3) * .6;
      ctx.fillRect(bx + dx, by + dy, sz, sz);
    }
    // 暗角
    const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * .34, W / 2, H / 2, Math.max(W, H) * .74);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.5)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
    if (!S.level) { requestAnimationFrame(draw); return; }
    const n = S.level.n, L = S.level;

    // 底板
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const px = ox + x * cell, py = oy + y * cell;
      ctx.fillStyle = (x + y) % 2 ? 'rgba(120,170,220,.045)' : 'rgba(120,170,220,.075)';
      rr(px + 2, py + 2, cell - 4, cell - 4, cell * .13); ctx.fill();
      ctx.strokeStyle = 'rgba(150,200,255,.10)'; ctx.lineWidth = 1;
      rr(px + 2, py + 2, cell - 4, cell - 4, cell * .13); ctx.stroke();
      // 网格十字微光（增强"走廊"感）
      ctx.fillStyle = 'rgba(150,200,255,.05)';
      ctx.fillRect(px + cell / 2 - .5, py + cell * .22, 1, cell * .56);
      ctx.fillRect(px + cell * .22, py + cell / 2 - .5, cell * .56, 1);
    }

    // 节点顺序引导：把已点亮与下一个可达节点用虚线连起来
    const nodeCells = L.cells.filter(c => c.type === 'node').sort((a, b) => a.id - b.id);
    for (let i = 0; i < nodeCells.length; i++) {
      const a = nodeCells[i], b = nodeCells[i + 1];
      if (!b) break;
      const done = S.activated.includes(a.id);
      const active = a.id === S.activated.length + 1 || (S.activated.length === 0 && a.id === 1);
      if (!done && !active) continue;
      ctx.save();
      ctx.setLineDash([5, 6]);
      ctx.lineDashOffset = -(now / 55) % 11;          // 虚线流动，暗示回声前进方向
      ctx.lineWidth = active ? 2.2 : 1.6;
      ctx.strokeStyle = done ? FREQ[a.freq].dim + '.28)' : 'rgba(255,208,112,.30)';
      ctx.beginPath();
      ctx.moveTo(ox + a.x * cell + cell / 2, oy + a.y * cell + cell / 2);
      ctx.lineTo(ox + b.x * cell + cell / 2, oy + b.y * cell + cell / 2);
      ctx.stroke();
      ctx.restore();
    }

    // 机关
    const cfg = S.cfg;
    for (const c of L.cells) {
      const px = ox + c.x * cell, py = oy + c.y * cell, cx = px + cell / 2, cy = py + cell / 2;
      const k = keyOf(c.x, c.y, n);
      if (c.type === 'wall') {
        ctx.fillStyle = '#26344a'; rr(px + 4, py + 4, cell - 8, cell - 8, 5); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.06)'; rr(px + 4, py + 4, cell - 8, (cell - 8) * .3, 5); ctx.fill();
        ctx.strokeStyle = 'rgba(150,200,255,.14)'; ctx.stroke();
      } else if (c.type === 'mirror') {
        const st = cfg.mirrors[k] ?? c.init;
        const hint = S.hintKey === k && now < S.hintUntil;
        if (hint) { glow('#ffd070', 22); }
        ctx.fillStyle = hint ? 'rgba(255,208,112,.22)' : 'rgba(140,216,255,.10)';
        rr(px + 4, py + 4, cell - 8, cell - 8, 7); ctx.fill(); noGlow();
        ctx.strokeStyle = hint ? '#ffd070' : 'rgba(140,216,255,.55)';
        ctx.lineWidth = hint ? 3 : 2.4;
        ctx.beginPath();
        const m = cell * .28;
        if (st === 0) { ctx.moveTo(cx - m, cy + m); ctx.lineTo(cx + m, cy - m); }
        else { ctx.moveTo(cx - m, cy - m); ctx.lineTo(cx + m, cy + m); }
        ctx.stroke();
        glow('#8cd8ff', 10); ctx.lineWidth = 1; ctx.stroke(); noGlow();
        ctx.fillStyle = 'rgba(160,210,255,.55)'; ctx.font = Math.max(8, cell * .15) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('↻', cx, py + cell - 5);
      } else if (c.type === 'tuner') {
        const st = cfg.tuners[k] ?? c.init, f = FREQ[st];
        const hint = S.hintKey === k && now < S.hintUntil;
        if (hint) glow('#ffd070', 22);
        ctx.fillStyle = hint ? 'rgba(255,208,112,.20)' : f.dim + '.14)';
        rr(px + 4, py + 4, cell - 8, cell - 8, 7); ctx.fill(); noGlow();
        glow(f.c, 12);
        ctx.strokeStyle = hint ? '#ffd070' : f.c; ctx.lineWidth = 2.2;
        const r = cell * .26;
        ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r, cy);
        ctx.lineTo(cx, cy + r); ctx.lineTo(cx - r, cy); ctx.closePath(); ctx.stroke();
        ctx.fillStyle = f.dim + '.32)'; ctx.fill(); noGlow();
        ctx.fillStyle = f.c; ctx.font = '700 ' + Math.max(9, cell * .2) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(f.n, cx, cy + 1);
        ctx.textBaseline = 'alphabetic';
      } else if (c.type === 'gate') {
        const open = S.activated.includes(c.id);
        ctx.fillStyle = open ? 'rgba(127,224,160,.12)' : 'rgba(255,122,138,.10)';
        rr(px + 4, py + 4, cell - 8, cell - 8, 6); ctx.fill();
        ctx.strokeStyle = open ? '#7fe0a0' : '#ff7a8a'; ctx.lineWidth = 2;
        ctx.setLineDash(open ? [] : [4, 3]);
        rr(px + 6, py + 6, cell - 12, cell - 12, 5); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = open ? '#7fe0a0' : '#ff7a8a';
        ctx.font = Math.max(11, cell * .26) + 'px sans-serif'; ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; ctx.fillText(open ? '◇' : '▣', cx, cy); ctx.textBaseline = 'alphabetic';
      } else if (c.type === 'node') {
        const on = S.activated.includes(c.id);
        const f = FREQ[c.freq];
        const isNext = !on && c.id === S.activated.length + 1;
        const reachable = c.id <= S.activated.length + 1;
        if (on) glow(f.c, 20);
        else if (isNext && !S.playing) glow('#ffd070', 16 + Math.sin(now / 240) * 6);
        ctx.fillStyle = on ? f.dim + '.24)' : isNext ? 'rgba(255,208,112,.13)' : 'rgba(120,150,190,.09)';
        rr(px + 3, py + 3, cell - 6, cell - 6, 9); ctx.fill(); noGlow();
        ctx.strokeStyle = on ? f.c : isNext ? '#ffd070' : reachable ? f.dim + '.55)' : 'rgba(130,160,200,.30)';
        ctx.lineWidth = on ? 2.6 : isNext ? 2.6 : 1.8;
        ctx.beginPath(); ctx.arc(cx, cy, cell * .30, 0, Math.PI * 2); ctx.stroke();
        if (on) { glow(f.c, 14); ctx.stroke(); noGlow(); }
        ctx.fillStyle = on ? '#fff' : isNext ? '#ffd070' : reachable ? f.dim + '.9)' : '#6c7f96';
        ctx.font = '800 ' + Math.max(12, cell * .30) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(on ? '✦' : c.id, cx, cy + 1); ctx.textBaseline = 'alphabetic';
        // 频率色点
        ctx.fillStyle = f.c; ctx.beginPath();
        ctx.arc(cx + cell * .27, cy - cell * .27, Math.max(2.5, cell * .055), 0, Math.PI * 2); ctx.fill();
        // 呼吸光环（已点亮 / 下一目标）
        if (on || isNext) {
          const bp = (Math.sin(now / 280 + c.id * 1.7) + 1) / 2;
          ctx.strokeStyle = on ? hexA(f.c, .45 * (1 - bp)) : 'rgba(255,208,112,' + (.4 * (1 - bp)) + ')';
          ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.arc(cx, cy, cell * (.30 + bp * .16), 0, Math.PI * 2); ctx.stroke();
        }
        // 当前目标标记
        if (isNext) {
          ctx.fillStyle = 'rgba(255,208,112,.85)';
          ctx.font = '700 ' + Math.max(7, cell * .13) + 'px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('下一枚', cx, py + cell - 4);
        }
      } else if (c.type === 'source') {
        glow('#8cd8ff', 18);
        ctx.fillStyle = 'rgba(140,216,255,.20)';
        rr(px + 3, py + 3, cell - 6, cell - 6, 9); ctx.fill(); noGlow();
        ctx.fillStyle = '#8cd8ff';
        ctx.beginPath(); ctx.moveTo(cx + cell * .22, cy);
        ctx.lineTo(cx - cell * .16, cy - cell * .20); ctx.lineTo(cx - cell * .16, cy + cell * .20);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(180,225,255,.8)'; ctx.font = Math.max(8, cell * .14) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('声源', cx, py + cell - 4);
      } else if (c.type === 'exit') {
        const ready = S.activated.length === L.nodeCount;
        if (ready) glow('#ffd070', 22);
        ctx.fillStyle = ready ? 'rgba(255,208,112,.22)' : 'rgba(140,160,200,.08)';
        rr(px + 4, py + 4, cell - 8, cell - 8, 8); ctx.fill(); noGlow();
        ctx.strokeStyle = ready ? '#ffd070' : 'rgba(150,180,220,.45)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, cell * .26, -Math.PI * .75, Math.PI * .75); ctx.stroke();
        ctx.fillStyle = ready ? '#ffd070' : '#8198b4';
        ctx.font = Math.max(9, cell * .15) + 'px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('出口', cx, py + cell - 4);
      }
    }

    // 声波
    if (S.playing && S.trace && S.trace[S.tick]) {
      for (const w of S.trace[S.tick].waves) {
        const f = FREQ[w.freq];
        for (let i = 0; i < w.trail.length; i++) {
          const t = w.trail[i], a = (i + 1) / w.trail.length * .5;
          ctx.fillStyle = f.dim + a + ')';
          ctx.beginPath();
          ctx.arc(ox + t.x * cell + cell / 2, oy + t.y * cell + cell / 2,
                  Math.max(2, cell * (.07 + a * .10)), 0, Math.PI * 2); ctx.fill();
        }
        glow(f.c, 16);
        ctx.fillStyle = f.c;
        ctx.beginPath();
        ctx.arc(ox + w.x * cell + cell / 2, oy + w.y * cell + cell / 2,
                Math.max(4, cell * .13), 0, Math.PI * 2); ctx.fill();
        noGlow();
      }
    }

    // 事件涟漪
    for (let i = S.fx.length - 1; i >= 0; i--) {
      const e = S.fx[i]; e.life -= 16;
      const k = 1 - e.life / e.max;
      ctx.strokeStyle = e.c.replace('ALPHA', String(Math.max(0, 1 - k) * .8));
      ctx.lineWidth = 2.5 * (1 - k) + .5;
      ctx.beginPath();
      ctx.arc(ox + e.x * cell + cell / 2, oy + e.y * cell + cell / 2,
              cell * (.18 + k * .65), 0, Math.PI * 2); ctx.stroke();
      if (e.life <= 0) S.fx.splice(i, 1);
    }

    // 激活粒子
    for (let i = S.parts.length - 1; i >= 0; i--) {
      const q = S.parts[i];
      q.x += q.vx; q.y += q.vy; q.vy += .035; q.vx *= .985; q.life -= 16;
      const k = q.life / q.max;
      if (k <= 0) { S.parts.splice(i, 1); continue; }
      ctx.globalAlpha = Math.max(0, k) * .9;
      ctx.fillStyle = q.c;
      ctx.beginPath(); ctx.arc(q.x, q.y, q.r * k + .4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    // 激活节拍脉冲
    const bt = now - S.beat;
    if (S.beat && bt >= 0 && bt < 620) {
      const k = bt / 620;
      ctx.strokeStyle = hexA(pal.accent, .38 * (1 - k));
      ctx.lineWidth = 3 * (1 - k) + 1;
      ctx.beginPath(); ctx.arc(W / 2, H * .45, Math.min(W, H) * (.14 + k * .55), 0, Math.PI * 2); ctx.stroke();
    }

    // 播放推进
    if (S.playing && now - S.lastAdvance > 105 / S.speed) {
      S.lastAdvance = now;
      const ev = S.trace[S.tick] ? S.trace[S.tick].events : [];
      handleEvents(ev);
      S.tick++;
      if (S.tick >= S.trace.length) finishPlay();
    }
    requestAnimationFrame(draw);
  }

  /* ---------------- 音效（轻量合成，贴合"回声"主题） ---------------- */
  const AU = {
    ctx: null, on: true,
    ready() {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return false;
        this.ctx = new AC();
        this.g = this.ctx.createGain(); this.g.gain.value = .30; this.g.connect(this.ctx.destination);
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return true;
    },
    tone(f, t0, dur, type, vol, slide) {
      if (!this.on || !this.ready()) return;
      const c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(f, c.currentTime + t0);
      if (slide) o.frequency.exponentialRampToValueAtTime(slide, c.currentTime + t0 + dur);
      g.gain.setValueAtTime(0, c.currentTime + t0);
      g.gain.linearRampToValueAtTime(vol || .18, c.currentTime + t0 + .012);
      g.gain.exponentialRampToValueAtTime(.0001, c.currentTime + t0 + dur);
      o.connect(g); g.connect(this.g);
      o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + .05);
    },
    click() { this.tone(660, 0, .07, 'triangle', .10); },
    bounce() { this.tone(520, 0, .09, 'sine', .09, 780); },
    tune() { this.tone(420, 0, .08, 'sine', .10); this.tone(630, .07, .10, 'sine', .09); },
    node(freq) { // 每种频率一个和弦琶音
      const base = [392, 494, 587][freq || 0];
      this.tone(base, 0, .30, 'sine', .16);
      this.tone(base * 1.5, .09, .26, 'sine', .10);
      this.tone(base * 2, .18, .34, 'sine', .07);
    },
    err() { this.tone(150, 0, .16, 'square', .06, 90); },
    gate() { this.tone(300, 0, .14, 'triangle', .09, 200); },
    win() {
      [523, 659, 784, 1047].forEach((f, i) => this.tone(f, i * .13, .5, 'sine', .13));
      this.tone(1319, .55, .8, 'sine', .08);
    },
    step() { this.tone(340, 0, .045, 'sine', .035); }
  };
  window.addEventListener('pointerdown', () => AU.ready(), { once: true });

  function addFx(x, y, c) { S.fx.push({ x, y, c, life: 520, max: 520 }); }
  function handleEvents(events) {
    for (const e of events) {
      if (e.t === 'node') {
        if (!S.activated.includes(e.id)) S.activated.push(e.id);
        addFx(e.x, e.y, FREQ[e.freq].dim + 'ALPHA)');
        addParts(e.x, e.y, FREQ[e.freq].c, 16);
        S.beat = performance.now();
        AU.node(e.freq);
        buildNodeRow();
      } else if (e.t === 'bounce') { addFx(e.x, e.y, 'rgba(140,216,255,ALPHA)'); AU.bounce(); }
      else if (e.t === 'tune') { addFx(e.x, e.y, FREQ[e.freq].dim + 'ALPHA)'); AU.tune(); }
      else if (e.t === 'gate') { addFx(e.x, e.y, 'rgba(255,122,138,ALPHA)'); AU.gate(); }
      else if (e.t === 'block' || e.t === 'wrong' || e.t === 'locked') {
        addFx(e.x, e.y, 'rgba(255,122,138,ALPHA)');
        if (e.t !== 'block' || Math.random() < .5) AU.err();
      }
    }
  }

  /* ---------------- UI ---------------- */
  let toastTimer = 0;
  function toast(text, ms = 2200) {
    const t = $('toast'); t.textContent = text; t.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.add('hidden'), ms);
  }
  function buildNodeRow() {
    const row = $('nodeRow'); row.innerHTML = '';
    for (let i = 1; i <= S.level.nodeCount; i++) {
      if (i > 1) { const s = document.createElement('span'); s.className = 'chain'; s.textContent = '›'; row.appendChild(s); }
      const d = document.createElement('div');
      d.className = 'nodeDot' + (S.activated.includes(i) ? ' on' : '');
      d.textContent = S.activated.includes(i) ? '✦' : i;
      row.appendChild(d);
    }
  }
  function loadLevel(idx) {
    S.lv = Math.max(1, Math.min(TOTAL, idx));
    S.level = genLevel(S.lv);
    S.cfg = { mirrors: { ...S.level.init.mirrors }, tuners: { ...S.level.init.tuners } };
    S.history = []; S.moves = 0; S.playing = false; S.trace = null; S.tick = 0;
    S.activated = []; S.won = false; S.fx = []; S.parts = []; S.beat = 0; S.hintKey = -1;
    layout();
    $('lvNum').textContent = '第 ' + S.lv + ' 关';
    $('chapName').textContent = CHAP[S.level.chapter] + ' · ' + CHAP_DESC[S.level.chapter];
    $('lvName').textContent = S.level.name + ' · ' + S.level.nodeCount + ' 段记忆';
    $('moves').textContent = '0';
    buildNodeRow();
    closeScreens();
    if (S.lv % 6 === 1) showStory('记忆碎片 · ' + CHAP[S.level.chapter], S.level.story);
  }
  function closeScreens() {
    ['title', 'levels', 'help', 'win', 'story'].forEach(id => $(id).classList.add('hidden'));
  }
  function showStory(tag, text) {
    $('storyTag').textContent = tag; $('storyText').textContent = text;
    $('story').classList.remove('hidden');
  }

  function cellFromEvent(ev) {
    const r = cv.getBoundingClientRect();
    const cx = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
    const cy = (ev.touches ? ev.touches[0].clientY : ev.clientY) - r.top;
    const gx = Math.floor((cx - ox) / cell), gy = Math.floor((cy - oy) / cell);
    if (gx < 0 || gy < 0 || gx >= S.level.n || gy >= S.level.n) return null;
    return { x: gx, y: gy, k: keyOf(gx, gy, S.level.n) };
  }
  cv.addEventListener('pointerdown', ev => {
    if (!S.level || S.playing || S.won) return;
    const p = cellFromEvent(ev); if (!p) return;
    const c = S.level.cells.find(o => o.x === p.x && o.y === p.y && (o.type === 'mirror' || o.type === 'tuner'));
    if (!c) return;
    S.history.push({ k: p.k, type: c.type, val: c.type === 'mirror' ? S.cfg.mirrors[p.k] : S.cfg.tuners[p.k] });
    if (c.type === 'mirror') S.cfg.mirrors[p.k] = 1 - (S.cfg.mirrors[p.k] ?? c.init);
    else S.cfg.tuners[p.k] = ((S.cfg.tuners[p.k] ?? c.init) + 1) % 3;
    S.moves++; $('moves').textContent = S.moves;
    AU.click();
  });

  function play() {
    if (S.playing || !S.level) return;
    if (S.won) { toast('这一段已经归位了，去下一段吧'); return; }
    const r = simulate(S.level, S.cfg);
    S.trace = r.trace; S.tick = 0; S.playing = true;
    S.activated = []; S.fx = []; S.lastAdvance = performance.now();
    S.result = r;
    buildNodeRow();
    $('btnPlay').disabled = true;
  }
  function finishPlay() {
    S.playing = false; $('btnPlay').disabled = false;
    const r = S.result;
    if (r.win) {
      S.won = true;
      AU.win();
      const prev = S.save.best[S.lv];
      const isBest = prev === undefined || S.moves < prev;
      if (isBest) S.save.best[S.lv] = S.moves;
      S.save.cleared[S.lv] = 1;
      S.save.cur = Math.min(TOTAL, S.lv + 1);
      persist();
      $('winText').innerHTML = '第 ' + S.lv + ' 关 · ' + S.level.name + '<br>' +
        S.level.story + '<br><br><span style="color:#ffd070">用了 ' + S.moves + ' 步' +
        (isBest ? ' · 新纪录！' : ' · 最佳 ' + S.save.best[S.lv] + ' 步') + '</span>';
      $('btnNext').textContent = S.lv >= TOTAL ? '回 到 回 廊' : '下 一 段';
      setTimeout(() => $('win').classList.remove('hidden'), 420);
    } else {
      const last = r.activated.length;
      toast(last ? '回声在第 ' + (last + 1) + ' 枚记忆前散了，再调一调' : '回声还没走到第一枚记忆，检查镜面', 3000);
    }
  }
  function undo() {
    if (S.playing || !S.history.length) return;
    const h = S.history.pop();
    if (h.type === 'mirror') S.cfg.mirrors[h.k] = h.val;
    else S.cfg.tuners[h.k] = h.val;
    S.moves = Math.max(0, S.moves - 1); $('moves').textContent = S.moves;
  }
  function reset() {
    if (S.playing) return;
    S.cfg = { mirrors: { ...S.level.init.mirrors }, tuners: { ...S.level.init.tuners } };
    S.history = []; S.moves = 0; S.activated = []; S.won = false; S.fx = [];
    $('moves').textContent = '0'; buildNodeRow();
    toast('已重置机关');
  }
  function hint() {
    if (S.playing || S.won) return;
    const sol = S.level.solution;
    for (const k in sol.mirrors) if ((S.cfg.mirrors[k] ?? 0) !== sol.mirrors[k]) {
      S.hintKey = +k; S.hintUntil = performance.now() + 2600;
      toast('提示：高亮的那面镜子，方向不对', 2600); return;
    }
    for (const k in sol.tuners) if ((S.cfg.tuners[k] ?? 0) !== sol.tuners[k]) {
      S.hintKey = +k; S.hintUntil = performance.now() + 2600;
      toast('提示：高亮的调频器，频率不对', 2600); return;
    }
    toast('机关都对了，点「播放回声」试试');
  }
  function openLevels() {
    const g = $('levelGrid'); g.innerHTML = '';
    for (let ch = 0; ch < 5; ch++) {
      const h = document.createElement('div'); h.className = 'chapTitle';
      h.textContent = CHAP[ch] + ' · ' + CHAP_DESC[ch]; g.appendChild(h);
      for (let i = 1; i <= 6; i++) {
        const lv = ch * 6 + i;
        const unlocked = lv === 1 || S.save.cleared[lv - 1] || S.save.cur >= lv;
        const d = document.createElement('div');
        d.className = 'lvCard' + (S.save.cleared[lv] ? ' done' : '') + (unlocked ? '' : ' lock');
        d.innerHTML = '<span class="ch">' + (ch + 1) + '</span><span class="n">' + lv + '</span>' +
          '<span class="s">' + (S.save.cleared[lv] ? '最佳 ' + S.save.best[lv] + ' 步' : unlocked ? LV_NAME[lv - 1] : '未解锁') + '</span>';
        if (unlocked) d.onclick = () => loadLevel(lv);
        g.appendChild(d);
      }
    }
    $('levels').classList.remove('hidden');
  }

  /* ---------------- 事件绑定 ---------------- */
  $('btnPlay').onclick = play;
  $('btnSpeed').onclick = () => {
    S.speed = S.speed === 1 ? 2 : S.speed === 2 ? 3 : 1;
    $('btnSpeed').innerHTML = '<span class="i">⏩</span>速度 ×' + S.speed;
  };
  $('btnUndo').onclick = undo;
  $('btnReset').onclick = reset;
  $('btnHint').onclick = hint;
  $('btnLevels').onclick = openLevels;
  $('levelsClose').onclick = () => $('levels').classList.add('hidden');
  $('storyOk').onclick = () => $('story').classList.add('hidden');
  $('btnStart').onclick = () => loadLevel(1);
  $('contLv').textContent = S.save.cur || 1;
  $('btnContinue').onclick = () => loadLevel(S.save.cur || 1);
  $('btnLevelSel').onclick = openLevels;
  $('btnHelp').onclick = () => $('help').classList.remove('hidden');
  $('btnHelp2').onclick = () => $('help').classList.remove('hidden');
  $('helpClose').onclick = () => $('help').classList.add('hidden');
  $('btnNext').onclick = () => S.lv >= TOTAL ? openLevels() : loadLevel(S.lv + 1);
  $('btnWinLevels').onclick = openLevels;
  $('btnReplay').onclick = () => { $('win').classList.add('hidden'); S.won = false; S.activated = []; buildNodeRow(); };
  window.addEventListener('keydown', e => {
    if (e.code === 'Space') { e.preventDefault(); play(); }
    else if (e.code === 'KeyR') reset();
    else if (e.code === 'KeyZ') undo();
    else if (e.code === 'KeyH') hint();
  });

  /* ---------------- 启动 ---------------- */
  resize();
  requestAnimationFrame(draw);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
  // 供自动化验收
  window.__ECHO2D__ = { S, genLevel, simulate, loadLevel, play, AU, get total() { return TOTAL; } };
})();
