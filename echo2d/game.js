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

  /* 通关歌词：按章节分组，每关取其中 2~3 句，逐字随旋律点亮 */
  const LYRICS = [
    ['听见了吗，那声迟到的回答', '绕过镜子，又落回脚下', '把没说完的话，轻轻放下'],
    ['第一折光，替我回头看', '橙色回声停在半路', '等一扇门，慢慢打开'],
    ['三个音阶，拼成旧日的调', '调律不是改变声音', '是终于肯听的人'],
    ['一环断，环环皆静', '把余响接回掌心', '长廊尽头，有人在等'],
    ['所有延迟都收回自己', '白色空间第一次有了回声', '这一次，声音属于你']
  ];
  const SCALE = [392, 440, 494, 587, 659, 784, 880, 988];  // 兼容旧的节点音映射
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);

  /* ============================================================
     曲库 SONGBOOK
     15 首「原创曲目」，按华语流行抒情曲常见的意境命名与立意
     （时差错过 / 星辰夏夜 / 未寄出的信 / 平行世界 / 回声终章…），
     旋律、和声进行、歌词全部为程序化原创，不使用任何第三方歌曲的
     录音或原歌词 —— 既能有「熟歌」的共鸣感，也不会有版权风险。
     难度分 5 档：调式、声部数、节奏密度、装饰音、速度逐档递增。
     ============================================================ */
  const MODES = {
    penta:     [0, 2, 4, 7, 9],
    pentaMin:  [0, 3, 5, 7, 10],
    major:     [0, 2, 4, 5, 7, 9, 11],
    minor:     [0, 2, 3, 5, 7, 8, 10],
    harmMinor: [0, 2, 3, 5, 7, 8, 11],
    dorian:    [0, 2, 3, 5, 7, 9, 10],
    lydian:    [0, 2, 4, 6, 7, 9, 11],
    blues:     [0, 3, 5, 6, 7, 10]
  };
  const MODE_N = { penta:'五声大调', pentaMin:'五声小调', major:'自然大调', minor:'自然小调',
    harmMinor:'和声小调', dorian:'多利亚', lydian:'利底亚', blues:'蓝调音阶' };
  /* 调式色彩等级：五声最素，大小调次之，中古/和声小调再次，利底亚与蓝调最浓。
     注意「音数」不等于难度（蓝调只有 6 音却比 7 音大调更有张力），故单独分级。 */
  const MODE_TIER = { penta:1, pentaMin:1, major:2, minor:2, harmMinor:3, dorian:3, lydian:4, blues:4 };
  /* 综合编曲复杂度：把速度 / 声部 / 装饰音 / 节奏密度 / 调式色彩 / 歌词规模
     折算成 0~100 分，让「越往后的关卡歌越复杂」变成玩家看得见的数字。 */
  function songComplexity(s) {
    return Math.round(
      (s.bpm - 70) / 55 * 22 +
      (s.voices - 1) / 3 * 24 +
      s.orn / 4 * 16 +
      (.36 - s.beat) / .16 * 14 +
      (MODE_TIER[s.mode] - 1) / 3 * 16 +
      Math.max(0, s.lines.length - 3) * 8
    );
  }
  const SONGBOOK = [
    // ── 第 1 档：五声、单声部、平稳四拍 ──
    { name:'时差', mood:'错过的时空', tier:1, root:60, mode:'penta', bpm:76, prog:[0,3,1,4], beat:.34, voices:1, orn:0, lead:'sine',
      lines:['我站在你走过的那秒','风把回答吹成迟到','同一片月光，隔了时差'] },
    { name:'晚风没回答', mood:'夏夜与未答', tier:1, root:57, mode:'penta', bpm:82, prog:[0,4,2,1], beat:.33, voices:1, orn:0, lead:'sine',
      lines:['晚风替我问了一句','路灯亮到天亮也没答','就把没说的，留在夏夜'] },
    { name:'旧站台', mood:'离别与回程', tier:1, root:62, mode:'pentaMin', bpm:72, prog:[0,3,4,2], beat:.35, voices:1, orn:0, lead:'triangle',
      lines:['列车带走那句再见','站台还剩半盏灯','我数着秒，等一个回程'] },
    // ── 第 2 档：大小调、经过音、双声部雏形 ──
    { name:'星轨', mood:'星辰与轨迹', tier:2, root:60, mode:'major', bpm:90, prog:[0,5,3,4], beat:.30, voices:2, orn:1, lead:'triangle',
      lines:['把名字写在星轨上','绕一圈又回到原点','你抬头时，光刚好落下'] },
    { name:'雨落之前', mood:'雨与错过', tier:2, root:57, mode:'minor', bpm:84, prog:[0,3,4,0], beat:.31, voices:2, orn:1, lead:'triangle',
      lines:['雨落之前先别转身','屋檐替我们留了半步','没说完的，都算数'] },
    { name:'未寄出的信', mood:'信与遗憾', tier:2, root:62, mode:'major', bpm:88, prog:[0,4,5,3], beat:.30, voices:2, orn:1, lead:'sine',
      lines:['信封折了又拆开','地址写到一半就停','有些话，只适合寄给风'] },
    // ── 第 3 档：和声小调 / 多利亚、切分、明确和声声部 ──
    { name:'光年回信', mood:'银河与回信', tier:3, root:57, mode:'harmMinor', bpm:96, prog:[0,5,3,4], beat:.27, voices:2, orn:2, lead:'triangle',
      lines:['光走了一年才到眼底','回信比提问更轻','穿过银河，仍认得那句'] },
    { name:'逆时针', mood:'时间倒流', tier:3, root:60, mode:'dorian', bpm:100, prog:[0,2,5,4], beat:.26, voices:3, orn:2, lead:'square',
      lines:['把秒针往回拨一格','让那句话先落地','如果可以，我想晚一步转身'] },
    { name:'隔一座夏天', mood:'距离与季节', tier:3, root:55, mode:'minor', bpm:92, prog:[0,6,5,4], beat:.28, voices:2, orn:2, lead:'triangle',
      lines:['我们隔了一整座夏天','蝉声替谁说了抱歉','风一吹，就都散了'] },
    // ── 第 4 档：转调、利底亚 / 蓝调、三声部与对位 ──
    { name:'平行夜', mood:'平行世界', tier:4, root:60, mode:'lydian', bpm:108, prog:[0,3,4,6], beat:.24, voices:3, orn:3, lead:'square',
      lines:['另一条街也亮着灯','另一个我没回头','同一场夜，走了两遍','哪一边才算真的出现过'] },
    { name:'把月亮还给我', mood:'执念与月光', tier:4, root:57, mode:'harmMinor', bpm:104, prog:[0,4,5,3], beat:.24, voices:3, orn:3, lead:'triangle',
      lines:['你把月亮借走那晚','潮汐就再没准过','我把影子留在原处','等一个不会来的归还'] },
    { name:'回声以北', mood:'远方与回声', tier:4, root:62, mode:'dorian', bpm:112, prog:[0,2,3,6], beat:.23, voices:3, orn:3, lead:'square',
      lines:['往北走声音会变慢','雪把每个字都留白','我喊了很久才听见','原来回答一直在我背后'] },
    // ── 第 5 档：复杂调式、变拍感、四声部、终章 ──
    { name:'时差之外', mood:'错位的终章', tier:5, root:57, mode:'blues', bpm:120, prog:[0,3,4,5], beat:.21, voices:4, orn:4, lead:'sawtooth',
      lines:['我们终于站在时差之外','所有迟到都同时抵达','不必再谁来先开口','这一句，够走完一整夜'] },
    { name:'所有未说的', mood:'未尽之言', tier:5, root:60, mode:'harmMinor', bpm:116, prog:[0,5,6,4], beat:.21, voices:4, orn:4, lead:'square',
      lines:['把所有未说的叠起来','刚好是一首歌的长度','尾音落下时不许回头','让回声替我们收尾'] },
    { name:'回声结束以后', mood:'终曲', tier:5, root:55, mode:'lydian', bpm:124, prog:[0,4,3,6], beat:.20, voices:4, orn:4, lead:'sawtooth',
      lines:['回声结束以后','白色空间第一次安静','我终于听见自己的脚步','和它落下的那一拍，同一个瞬间'] }
  ];
  const tierOf = lv => Math.min(5, 1 + Math.floor((lv - 1) / 6));
  function songForLevel(lv) {
    const tier = tierOf(lv);
    const pool = SONGBOOK.filter(s => s.tier === tier);
    return pool[(lv - 1) % pool.length];
  }
  function lyricsFor(lv) { return songForLevel(lv).lines.slice(); }

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
    const sources = Array.isArray(level.sources) && level.sources.length ? level.sources : [level.src];
    let waves = sources.map((src, i) => {
      const d = DIRS[src.dir];
      return { x: src.x, y: src.y, dx: d[0], dy: d[1], freq: src.freq || 0,
        sourceId: src.id || i + 1, trail: [], wait: Math.max(0, src.startDelay || 0) };
    });
    const openGates = new Set(), openResonators = new Set(), resonanceWait = new Map();
    const openSync = new Set(), syncWait = new Map();
    let nextNode = 1;
    const activated = [];
    const trace = [{ waves: waves.map(w => ({ ...w })), events: [] }];

    for (let tick = 1; tick < 180; tick++) {
      const events = [], nw = [];
      for (const w of waves) {
        if (w.wait > 0) { nw.push({ ...w, wait: w.wait - 1 }); continue; }
        const nx = w.x + w.dx, ny = w.y + w.dy;
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) { events.push({ t: 'die', x: w.x, y: w.y }); continue; }
        const c = cells[keyOf(nx, ny, n)];
        const trail = [...w.trail, { x: w.x, y: w.y }].slice(-8);
        if (!c) { nw.push({ ...w, x: nx, y: ny, dx: w.dx, dy: w.dy, freq: w.freq, trail }); continue; }
        if (c.type === 'wall') { events.push({ t: 'block', x: nx, y: ny }); continue; }
        if (c.type === 'gate' && !openGates.has(c.id)) { events.push({ t: 'gate', x: nx, y: ny, id: c.id }); continue; }
        if (c.type === 'node' && c.id > nextNode) { events.push({ t: 'locked', x: nx, y: ny, id: c.id }); continue; }
        let dx = w.dx, dy = w.dy, freq = w.freq;
        if (c.type === 'sync' && !openSync.has(c.group)) {
          const group = c.group || 'sync-' + nx + '-' + ny;
          const prior = syncWait.get(group), window = Math.max(1, c.window || 1);
          if (!prior || tick - prior.tick > window) {
            syncWait.set(group, { tick, waves: [{ wave: w, pad: c.pad, sourceId: w.sourceId }] });
            events.push({ t: 'syncWait', x: nx, y: ny, group, pad: c.pad, sourceId: w.sourceId });
            continue;
          }
          const distinct = prior.waves.some(a => a.pad !== c.pad && a.sourceId !== w.sourceId);
          if (distinct) {
            openSync.add(group);
            events.push({ t: 'sync', x: nx, y: ny, group, pad: c.pad });
            for (const held of prior.waves) nw.push({ ...held.wave, x: held.wave.x + held.wave.dx, y: held.wave.y + held.wave.dy,
              trail: [...held.wave.trail, { x: held.wave.x, y: held.wave.y }].slice(-8) });
            nw.push({ ...w, x: nx, y: ny, trail });
            syncWait.delete(group);
            continue;
          }
          if (!prior.waves.some(a => a.sourceId === w.sourceId && a.pad === c.pad))
            prior.waves.push({ wave: w, pad: c.pad, sourceId: w.sourceId });
          events.push({ t: 'syncWait', x: nx, y: ny, group, pad: c.pad, sourceId: w.sourceId });
          continue;
        }
        if (c.type === 'resonator' && !openResonators.has(c.id)) {
          const id = c.id || 'resonator-' + nx + '-' + ny, prior = resonanceWait.get(id);
          const window = Math.max(1, c.window || 2);
          if (prior && prior.freq !== freq && tick - prior.tick <= window) {
            openResonators.add(id);
            events.push({ t: 'resonance', x: nx, y: ny, id, freq, window });
            for (const held of prior.waves) nw.push({ ...held, x: nx, y: ny, trail: [...held.trail, { x: held.x, y: held.y }].slice(-8) });
            nw.push({ ...w, x: nx, y: ny, trail });
            resonanceWait.delete(id);
            continue;
          }
          if (!prior || tick - prior.tick > window) resonanceWait.set(id, { freq, tick, waves: [w] });
          else prior.waves.push(w);
          events.push({ t: 'resonanceWait', x: nx, y: ny, id, freq, window });
          continue;
        }
        if (c.type === 'node' && activated.includes(c.id)) {
          nw.push({ ...w, x: nx, y: ny, trail });
          continue;
        }
        if (c.type === 'mirror') {
          const r = reflect(dx, dy, c.state); dx = r[0]; dy = r[1];
          events.push({ t: 'bounce', x: nx, y: ny, state: c.state });
        } else if (c.type === 'tuner') {
          freq = c.state; events.push({ t: 'tune', x: nx, y: ny, freq });
        } else if (c.type === 'delay') {
          events.push({ t: 'delay', x: nx, y: ny, ticks: Math.max(1, c.ticks || 2) });
        } else if (c.type === 'decoy') {
          events.push({ t: 'decoy', x: nx, y: ny });
        } else if (c.type === 'splitter') {
          const branches = Array.isArray(c.branches) && c.branches.length ? c.branches : [0, 1, 2, 3];
          events.push({ t: 'split', x: nx, y: ny, branches: branches.slice() });
          for (const dir of branches) {
            const d = DIRS[((dir % 4) + 4) % 4];
            nw.push({ ...w, x: nx, y: ny, dx: d[0], dy: d[1], trail });
          }
          continue;
        } else if (c.type === 'node') {
          if (freq !== c.freq) { events.push({ t: 'wrong', x: nx, y: ny, id: c.id, freq }); continue; }
          if (!activated.includes(c.id)) {
            activated.push(c.id); nextNode++; openGates.add(c.id);
            events.push({ t: 'node', x: nx, y: ny, id: c.id, freq });
          }
        } else if (c.type === 'exit') {
          if (activated.length === level.nodeCount) {
            trace.push({ waves: [], events });
            return { win: true, trace, activated };
          }
          events.push({ t: 'exitClosed', x: nx, y: ny });
          continue;
        }
        nw.push({ x: nx, y: ny, dx, dy, freq, trail, wait: c.type === 'delay' ? Math.max(1, c.ticks || 2) : 0 });
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
    const segCount = 5 + Math.floor(rng() * 4) + Math.min(2, chapter);   // 路径更长、转折更多
    const path = [], used = new Set(), mirrorAt = new Map();
    let x = 0, y = 1 + Math.floor(rng() * (n - 2)), dir = 1;
    const startY = y;
    for (let s = 0; s < segCount; s++) {
      // 后期章节路径更长，保证节点与门有足够落点
      const len = 1 + Math.floor(rng() * 3) + (chapter >= 2 ? 1 : 0);
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
      init.mirrors[k] = 1 - st;      // 每面镜子初始都拨反，必须逐面调回
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
    const wallCount = 7 + chapter * 4;
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
    const n = chapter <= 1 ? 8 : chapter === 2 ? 9 : 10;
    const nodeCount = 3 + chapter;                 // 3~7 段记忆（原 2~6）
    const tunerCount = Math.min(4, 1 + chapter);   // 1~4 个调频器，第一章即引入颜色
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

  /* ---------------- 无尽回廊：层数无上限，每层仍逐层验证可解 ---------------- */
  const ENDLESS_KEY = 'echo2d_endless_v1';
  const ENDLESS_STORY = [
    '回廊没有尽头。你每走完一层，它就再长出一层。',
    '这里的镜子不记得你，但你的步数会留下。',
    '越往深处，记忆越多，门也越密。',
    '没有终章，也没有彩排——只有下一层。',
    '你不再数还剩几关，只数自己还愿意再走一层。'
  ];
  function genEndlessLevel(depth) {
    const d = Math.max(1, depth | 0);
    const chapter = Math.min(4, Math.floor((d - 1) / 4));
    const n = chapter <= 1 ? 8 : chapter === 2 ? 9 : 10;
    // 节点数随层数增长，但封顶在 n-3，保证兜底直线不与出口重叠、不越界
    const nodeCount = Math.min(n - 3, 3 + Math.floor((d - 1) / 3));
    const tunerCount = Math.min(4, 1 + Math.floor((d - 1) / 4));
    const idx = 5000 + d;
    // 在多个可解候选里优先挑调频器达标、其次镜面最多的一层，
    // 保证「越深越复杂」不被随机布局拉回退；种子上限与剧情关一致，避免退回兜底直线。
    let bestLv = null, bestT = -1, bestM = -1, found = 0;
    for (let salt = 0; salt < 2000 && found < 60; salt++) {
      const lv = tryBuild(idx, n, nodeCount, tunerCount, chapter, salt);
      if (!lv) continue;
      found++;
      const t = lv.cells.filter(c => c.type === 'tuner').length;
      const m = lv.cells.filter(c => c.type === 'mirror').length;
      if (t > bestT || (t === bestT && m > bestM)) { bestLv = lv; bestT = t; bestM = m; }
      if (t >= tunerCount && m >= nodeCount) break;
    }
    if (bestLv) {
      bestLv.name = '无尽 · 第 ' + d + ' 层';
      bestLv.story = ENDLESS_STORY[(d - 1) % ENDLESS_STORY.length];
      bestLv.depth = d;
      return bestLv;
    }
    // 安全兜底：节点落在 x=2..nodeCount+1，出口在 n-1，必定可解
    const cells = [];
    for (let i = 1; i <= nodeCount; i++) cells.push({ type: 'node', x: i + 1, y: 3, id: i, freq: 0 });
    cells.push({ type: 'source', x: 0, y: 3 }, { type: 'exit', x: n - 1, y: 3 });
    const sol = { mirrors: {}, tuners: {} };
    return { idx, n, chapter, nodeCount, cells, path: [], solution: sol, init: sol,
      src: { x: 0, y: 3, dir: 1, freq: 0 },
      name: '无尽 · 第 ' + d + ' 层',
      story: ENDLESS_STORY[(d - 1) % ENDLESS_STORY.length], depth: d };
  }
  function loadEndless() {
    try {
      const s = JSON.parse(localStorage.getItem(ENDLESS_KEY));
      if (s && typeof s.best === 'number' && typeof s.cleared === 'number') {
        s.bestSteps = s.bestSteps || {}; return s;
      }
    } catch (e) {}
    return { best: 0, cleared: 0, bestSteps: {} };
  }
  function persistEndless() {
    try { localStorage.setItem(ENDLESS_KEY, JSON.stringify(S.endless)); } catch (e) {}
  }

  /* ---------------- 状态 ---------------- */
  const S = {
    lv: 1, level: null, cfg: null, history: [], moves: 0,
    playing: false, trace: null, tick: 0, lastAdvance: 0, speed: 1,
    activated: [], won: false, hintKey: -1, hintUntil: 0, fx: [], parts: [], beat: 0,
    melody: [], song: null, songPlaying: false, hintsLeft: 3,
    jukeSel: -1, jukeSong: null,
    mode: 'story', endless: loadEndless(),
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
    // 通关旋律回放：随节拍从中心扩散的声波环，让「连起来的歌」看得见
    if (S.songPlaying && S.song) {
      const period = S.song.beat * 1000, phase = (now % period) / period;
      for (let k = 0; k < 3; k++) {
        const t = (phase + k / 3) % 1;
        const r = Math.min(W, H) * (.16 + t * .46);
        ctx.strokeStyle = hexA(pal.accent, (1 - t) * .16);
        ctx.lineWidth = 2 + (1 - t) * 2;
        ctx.beginPath(); ctx.arc(W / 2, H * .48, r, 0, Math.PI * 2); ctx.stroke();
      }
    }
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
      } else if (c.type === 'delay') {
        const pulse = .5 + .5 * Math.sin(now / 220 + c.x * 1.7 + c.y);
        glow('#b79cff', 10 + pulse * 8);
        ctx.fillStyle = 'rgba(183,156,255,.13)';
        rr(px + 4, py + 4, cell - 8, cell - 8, 7); ctx.fill(); noGlow();
        ctx.strokeStyle = '#b79cff'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, cell * .25, -.5 * Math.PI, (pulse * 1.7 + .3) * Math.PI); ctx.stroke();
        ctx.fillStyle = '#e1d3ff'; ctx.font = '700 ' + Math.max(8, cell * .18) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('+' + (c.ticks || 2), cx, cy); ctx.textBaseline = 'alphabetic';
      } else if (c.type === 'decoy') {
        ctx.fillStyle = 'rgba(255,122,138,.08)';
        rr(px + 5, py + 5, cell - 10, cell - 10, cell * .25); ctx.fill();
        ctx.strokeStyle = 'rgba(255,150,170,.48)'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.arc(cx, cy, cell * .24, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,175,190,.78)'; ctx.font = '700 ' + Math.max(10, cell * .24) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', cx, cy); ctx.textBaseline = 'alphabetic';
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
      } else if (c.type === 'sync') {
        const open = S.trace && S.trace.some(fr => fr.events.some(e => e.t === 'sync' && e.group === c.group));
        glow(open ? '#7fe0a0' : '#8cd8ff', 17);
        ctx.fillStyle = open ? 'rgba(127,224,160,.20)' : 'rgba(140,216,255,.13)';
        ctx.beginPath(); ctx.arc(cx, cy, cell * .27, 0, Math.PI * 2); ctx.fill(); noGlow();
        ctx.strokeStyle = open ? '#7fe0a0' : '#8cd8ff'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, cell * .27, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#e8fff2'; ctx.font = '700 ' + Math.max(9, cell * .2) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText(c.pad || '同', cx, cy + cell * .07);
      } else if (c.type === 'resonator') {
        const open = S.trace && S.trace.some(fr => fr.events.some(e => e.t === 'resonance' && e.id === c.id));
        glow(open ? '#ffd070' : '#c79cff', 20);
        ctx.fillStyle = open ? 'rgba(255,208,112,.18)' : 'rgba(199,156,255,.16)';
        ctx.beginPath(); ctx.arc(cx, cy, cell * .29, 0, Math.PI * 2); ctx.fill(); noGlow();
        ctx.strokeStyle = open ? '#ffd070' : '#c79cff'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, cell * .29, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#f2e6ff'; ctx.font = '700 ' + Math.max(9, cell * .19) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('双频', cx, cy + cell * .06);
      } else if (c.type === 'splitter') {
        glow('#7fe0a0', 16);
        ctx.fillStyle = 'rgba(127,224,160,.16)';
        ctx.beginPath(); ctx.moveTo(cx, py + 5); ctx.lineTo(px + cell - 5, cy); ctx.lineTo(cx, py + cell - 5); ctx.lineTo(px + 5, cy); ctx.closePath(); ctx.fill(); noGlow();
        ctx.strokeStyle = '#7fe0a0'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#d8ffe5'; ctx.font = '700 ' + Math.max(9, cell * .2) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('分', cx, cy + cell * .07);
      } else if (c.type === 'source') {
        glow(c.freq === 1 ? '#ffb26b' : '#8cd8ff', 18);
        ctx.fillStyle = 'rgba(140,216,255,.20)';
        rr(px + 3, py + 3, cell - 6, cell - 6, 9); ctx.fill(); noGlow();
        ctx.fillStyle = '#8cd8ff';
        ctx.beginPath(); ctx.moveTo(cx + cell * .22, cy);
        ctx.lineTo(cx - cell * .16, cy - cell * .20); ctx.lineTo(cx - cell * .16, cy + cell * .20);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(180,225,255,.8)'; ctx.font = Math.max(8, cell * .14) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText(c.freq === 1 ? '橙声源' : '青声源', cx, py + cell - 4);
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
    /* 通关：把本关所有节点音连成一段完整旋律（主音 + 低八度衬底 + 泛音） */
    song(notes, beat) {
      if (!this.on || !this.ready()) return 0;
      this.tone(196, 0, .45, 'sine', .07);                  // 前奏铺底
      let i = 0;
      for (const n of notes) {
        const at = .18 + i * beat;
        if (n.f > 0) {
          this.tone(n.f, at, beat * 1.65, 'sine', .13);
          this.tone(n.f * .5, at, beat * 2.1, 'triangle', .04);
          this.tone(n.f * 2, at + .05, beat * .85, 'sine', .03);
        }
        i++;
      }
      const end = .18 + notes.length * beat;
      this.tone(392, end, .9, 'sine', .09);                // 尾音收束
      this.tone(587, end + .06, .9, 'sine', .06);
      return end + 1;
    },
    /* ---------- 完整编曲：前奏 / 和弦伴奏 / 鼓组 / 主旋律 / 和声 / 尾奏 ---------- */
    _noise() {
      if (!this.ctx) return null;
      if (this._nb) return this._nb;
      const n = Math.floor(this.ctx.sampleRate * .5), b = this.ctx.createBuffer(1, n, this.ctx.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      this._nb = b; return b;
    },
    drum(t0, kind, vol) {
      if (!this.on || !this.ready()) return;
      const c = this.ctx, T = c.currentTime + t0;
      if (kind === 'kick') {
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(150, T);
        o.frequency.exponentialRampToValueAtTime(42, T + .12);
        g.gain.setValueAtTime(Math.max(.0001, vol), T);
        g.gain.exponentialRampToValueAtTime(.0001, T + .20);
        o.connect(g); g.connect(this.g); o.start(T); o.stop(T + .22);
        return;
      }
      const buf = this._noise(); if (!buf) return;
      const s = c.createBufferSource(); s.buffer = buf;
      const fq = c.createBiquadFilter(), g = c.createGain();
      fq.type = kind === 'hat' ? 'highpass' : 'bandpass';
      fq.frequency.value = kind === 'hat' ? 7200 : 1800; fq.Q.value = .8;
      const dur = kind === 'hat' ? .045 : .14;
      g.gain.setValueAtTime(Math.max(.0001, vol), T);
      g.gain.exponentialRampToValueAtTime(.0001, T + dur);
      s.connect(fq); fq.connect(g); g.connect(this.g);
      s.start(T); s.stop(T + dur + .02);
    },
    perform(song) {
      if (!this.on || !this.ready()) return 0;
      const cfg = song.cfg, notes = song.notes, beat = song.beat;
      const scale = MODES[cfg.mode], root = cfg.root;
      const deg = d => scale[((d % scale.length) + scale.length) % scale.length];
      const hz = (d, oct) => mtof(root + deg(d) + 12 * (oct || 0));
      const intro = .28;
      // 前奏：主和弦琶音上行
      for (let i = 0; i < 4; i++) this.tone(hz(cfg.prog[0] + i * 2, 1), i * beat * .5, beat * 1.4, cfg.lead, .042);
      // 伴奏：每 4 字换一个和弦，铺 pad + 低音；鼓组随难度加密
      for (let k = 0; k < notes.length; k += 4) {
        const chord = cfg.prog[(k / 4 | 0) % cfg.prog.length], at = intro + k * beat;
        this.tone(hz(chord, -1), at, beat * 4.2, 'triangle', .050);
        this.tone(hz(chord, 0), at, beat * 4.0, 'sine', .036);
        this.tone(hz(chord + 2, 0), at, beat * 4.0, 'sine', .025);
        if (cfg.voices >= 3) this.tone(hz(chord + 4, 0), at, beat * 4.0, 'sine', .018);
        const hits = cfg.tier <= 1 ? [0] : cfg.tier === 2 ? [0, 2] : [0, 1, 2, 3];
        for (const h of hits) {
          const dt = at + h * beat;
          this.drum(dt, 'kick', h === 0 ? .09 : .052);
          if (cfg.tier >= 2 && h % 2 === 0) this.drum(dt + beat * .5, 'hat', .016);
          if (cfg.tier >= 4) this.drum(dt + beat * .25, 'hat', .011);
        }
        if (cfg.tier >= 3) this.drum(at + beat * 2, 'snare', .040);
      }
      // 主旋律：与歌词逐字高亮严格同步
      notes.forEach((n, i) => {
        const at = intro + i * beat;
        if (n.f > 0) {
          this.tone(n.f, at, beat * 1.55, cfg.lead, .112);
          if (cfg.voices >= 2) this.tone(n.harmony || n.f * 1.5, at, beat * 1.30, 'sine', .028);
          if (cfg.voices >= 4) this.tone(n.f * .5, at, beat * 1.80, 'triangle', .024);
          if (cfg.orn > 0 && i % 3 === 1) this.tone(n.f * 2, at + beat * .22, beat * .5, 'sine', .020);
        }
      });
      // 尾奏：解决回主和弦
      const end = intro + notes.length * beat;
      for (let i = 0; i < 3; i++) this.tone(hz(cfg.prog[0] + i * 2, i === 0 ? 0 : 1), end + i * .10, 1.0, cfg.lead, .050);
      return end + 1.3;
    },
    /* 未通关：把已点亮的音倒着渐弱放一遍，像散掉的回声 */
    fragments(melody) {
      if (!this.on || !this.ready() || !melody.length) return;
      melody.slice().reverse().forEach((m, i) => {
        this.tone([392, 494, 587][m.freq || 0] * Math.max(.6, 1 - i * .06), i * .12, .22, 'sine', .07);
      });
    },
    speak(lines) {
      try {
        if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
        window.speechSynthesis.cancel();
        for (const l of lines) {
          const u = new SpeechSynthesisUtterance(l);
          u.lang = 'zh-CN'; u.rate = .9; u.pitch = 1.04; u.volume = .6;
          window.speechSynthesis.speak(u);
        }
      } catch (e) {}
    },
    step() { this.tone(340, 0, .045, 'sine', .035); }
  };
  window.addEventListener('pointerdown', () => AU.ready(), { once: true });

  function addFx(x, y, c) { S.fx.push({ x, y, c, life: 520, max: 520 }); }
  function handleEvents(events) {
    for (const e of events) {
      if (e.t === 'node') {
        if (!S.activated.includes(e.id)) { S.activated.push(e.id); S.melody.push({ freq: e.freq, id: e.id }); }
        addFx(e.x, e.y, FREQ[e.freq].dim + 'ALPHA)');
        addParts(e.x, e.y, FREQ[e.freq].c, 16);
        S.beat = performance.now();
        AU.node(e.freq);
        buildNodeRow();
      } else if (e.t === 'bounce') { addFx(e.x, e.y, 'rgba(140,216,255,ALPHA)'); AU.bounce(); }
      else if (e.t === 'tune') { addFx(e.x, e.y, FREQ[e.freq].dim + 'ALPHA)'); AU.tune(); }
      else if (e.t === 'delay') { addFx(e.x, e.y, 'rgba(183,156,255,ALPHA)'); AU.tone(330, 0, .22, 'sine', .07, 220); }
      else if (e.t === 'syncWait') { addFx(e.x, e.y, 'rgba(140,216,255,ALPHA)'); AU.tone(240 + (e.pad === 'B' ? 110 : 0), 0, .16, 'sine', .045, 360); }
      else if (e.t === 'sync') { addFx(e.x, e.y, 'rgba(127,224,160,ALPHA)'); addParts(e.x, e.y, '#7fe0a0', 20); AU.tone(580, 0, .32, 'triangle', .09, 880); }
      else if (e.t === 'resonanceWait') { addFx(e.x, e.y, 'rgba(199,156,255,ALPHA)'); AU.tone(260 + e.freq * 90, 0, .18, 'sine', .05, 420); }
      else if (e.t === 'resonance') { addFx(e.x, e.y, 'rgba(255,208,112,ALPHA)'); addParts(e.x, e.y, '#ffd070', 22); AU.tone(660, 0, .34, 'sine', .1, 990); }
      else if (e.t === 'split') { addFx(e.x, e.y, 'rgba(127,224,160,ALPHA)'); AU.tone(520, 0, .2, 'triangle', .06, 780); }
      else if (e.t === 'decoy') { addFx(e.x, e.y, 'rgba(255,150,170,ALPHA)'); }
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
  function loadLevel(idx, opts) {
    const endless = !!(opts && opts.endless);
    S.mode = endless ? 'endless' : 'story';
    S.lv = endless ? Math.max(1, Math.floor(idx)) : Math.max(1, Math.min(TOTAL, idx));
    S.level = endless ? genEndlessLevel(S.lv) : genLevel(S.lv);
    S.cfg = { mirrors: { ...S.level.init.mirrors }, tuners: { ...S.level.init.tuners } };
    S.history = []; S.moves = 0; S.playing = false; S.trace = null; S.tick = 0;
    S.activated = []; S.won = false; S.fx = []; S.parts = []; S.beat = 0; S.hintKey = -1;
    S.melody = []; S.song = null; S.songPlaying = false; S.hintsLeft = 3;
    stopSong();
    layout();
    $('lvNum').textContent = endless ? '无尽 · 第 ' + S.lv + ' 层' : '第 ' + S.lv + ' 关';
    $('chapName').textContent = endless
      ? '无尽回廊 · 最远 ' + S.endless.best + ' 层 · 累计 ' + S.endless.cleared + ' 层'
      : CHAP[S.level.chapter] + ' · ' + CHAP_DESC[S.level.chapter];
    $('lvName').textContent = S.level.name + ' · ' + S.level.nodeCount + ' 段记忆';
    const sg = songForLevel(S.lv), t = tierOf(S.lv);
    const songEl = $('lvSong');
    if (songEl) songEl.textContent = '♪《' + sg.name + '》 · ' + '◆'.repeat(t) + '◇'.repeat(5 - t) +
      ' · ' + sg.bpm + ' BPM · ' + sg.voices + ' 声部';
    $('moves').textContent = '0';
    buildNodeRow();
    closeScreens();
    if (!endless && S.lv % 6 === 1) showStory('记忆碎片 · ' + CHAP[S.level.chapter], S.level.story);
  }
  function loadCustomLevel(level) {
    if (!level || !Array.isArray(level.cells) || !level.src) return false;
    S.mode = 'theme'; S.lv = Math.max(1, level.idx || 1); S.level = level;
    S.cfg = { mirrors: { ...level.init.mirrors }, tuners: { ...level.init.tuners } };
    S.history = []; S.moves = 0; S.playing = false; S.trace = null; S.tick = 0;
    S.activated = []; S.won = false; S.fx = []; S.parts = []; S.beat = 0; S.hintKey = -1;
    S.melody = []; S.song = null; S.songPlaying = false; S.hintsLeft = 3; stopSong();
    layout();
    $('lvNum').textContent = '主题 · 第 ' + S.lv + ' 关';
    $('chapName').textContent = '时空错位 · 主题关卡';
    $('lvName').textContent = level.name + ' · ' + level.nodeCount + ' 段记忆';
    const songEl = $('lvSong');
    if (songEl) songEl.textContent = '♪ 主题关卡 · ' + (level.mechanic || '镜面与频率');
    $('moves').textContent = '0'; buildNodeRow(); closeScreens();
    return true;
  }
  function startEndless(depth) { loadLevel(Math.max(1, depth || S.endless.best || 1), { endless: true }); }
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
    S.activated = []; S.fx = []; S.melody = []; S.lastAdvance = performance.now();
    S.result = r;
    buildNodeRow();
    $('btnPlay').disabled = true;
  }
  /* ---------------- 通关旋律 + 逐字歌词 ----------------
     每个点亮过的记忆节点是一个音；通关后按歌词逐字连成一整段旋律播放，
     字随音亮起，于是「散落的回声」真的连成了一句歌。 */
  let songTimers = [];
  function stopSong() {
    for (const t of songTimers) clearTimeout(t);
    songTimers = []; S.songPlaying = false;
  }
  function optimalMoves(lv) {
    let n = 0;
    for (const k in lv.solution.mirrors) if ((lv.init.mirrors[k] ?? 0) !== lv.solution.mirrors[k]) n++;
    for (const k in lv.solution.tuners) if ((lv.init.tuners[k] ?? 0) !== lv.solution.tuners[k]) n++;
    return Math.max(1, n);
  }
  /* 把本关点亮的记忆音，按当前曲目的调式 / 和弦进行 / 声部数编成一首完整的歌。
     关卡越深：调式越复杂、声部越多、节奏越密、末句升八度形成副歌高潮。 */
  function buildSong(melody, lv) {
    const cfg = songForLevel(lv), scale = MODES[cfg.mode], lines = cfg.lines, beat = cfg.beat;
    const deg = d => scale[((d % scale.length) + scale.length) % scale.length];
    const hz = (d, oct) => mtof(cfg.root + deg(d) + 12 * (oct || 0));
    const notes = [];
    let mi = 0;
    for (let li = 0; li < lines.length; li++) {
      const chars = lines[li].split('');
      for (let ci = 0; ci < chars.length; ci++) {
        const ch = chars[ci];
        if (/[，。、！？\s]/.test(ch)) { notes.push({ f: 0, li, ci }); continue; }
        const m = melody.length ? melody[mi % melody.length] : { freq: li % 3 };
        mi++;
        const motive = (m.freq || 0) * 2 + (ci % 4) + li + (cfg.tier >= 3 ? (ci % 2 ? 2 : 0) : 0);
        const d = cfg.prog[li % cfg.prog.length] + motive % scale.length;
        const oct = (li === lines.length - 1 && cfg.tier >= 3) ? 2 : 1;   // 末句升八度 = 副歌
        notes.push({ f: hz(d, oct), harmony: hz(d + 2, oct), li, ci, freq: m.freq, voice: cfg.voices, oct });
      }
      notes.push({ f: 0, li, ci: -1 });   // 句间呼吸
    }
    return {
      lines, notes, beat, cfg, name: cfg.name, tier: cfg.tier,
      melodyCount: melody.length,
      complexity: songComplexity(cfg),
      dur: .28 + notes.length * beat + 1.3,
      info: `${cfg.bpm} BPM · ${MODE_N[cfg.mode]} · ${cfg.voices} 声部 · ${cfg.mood}`
    };
  }
  function lyricHTML(song, activeIdx) {
    const cur = activeIdx >= 0 ? song.notes[activeIdx] : null;
    return song.lines.map((l, li) =>
      `<div class="ln${cur && cur.li === li ? ' on' : ''}">` +
      l.split('').map((ch, ci) =>
        `<span class="ch${cur && cur.li === li && cur.ci === ci ? ' on' : ''}">${ch}</span>`).join('') +
      '</div>').join('');
  }
  function renderLyrics(song, i) { const box = $('lyricLines'); if (box) box.innerHTML = lyricHTML(song, i); }
  function renderJukeLyrics(song, i) { const box = $('jukeLyrics'); if (box) box.innerHTML = lyricHTML(song, i); }

  /* 通用播放：通关连播与唱片架试听共用同一套「编曲 + 逐字歌词 + 进度条」驱动 */
  function performSong(song, ui) {
    stopSong();
    if (!song || !song.notes.length) return;
    S.songPlaying = true;
    if (ui.tag) ui.tag.textContent = ui.tagText(song);
    if (ui.info) ui.info.innerHTML = ui.infoHTML(song);
    ui.render(song, -1);
    if (ui.bar) ui.bar.style.width = '0%';
    AU.perform(song);
    const intro = .28;
    song.notes.forEach((n, i) => {
      songTimers.push(setTimeout(() => {
        ui.render(song, i);
        if (ui.bar) ui.bar.style.width = Math.round((i + 1) / song.notes.length * 100) + '%';
      }, (intro + i * song.beat) * 1000));
    });
    songTimers.push(setTimeout(() => { S.songPlaying = false; }, song.dur * 1000));
  }
  function playSong(song) {
    performSong(song, {
      tag: $('lyricTag'), info: $('songInfo'), bar: $('lyricBarIn'), render: renderLyrics,
      tagText: s => '♪《' + s.name + '》 · 第 ' + S.lv + (S.mode === 'endless' ? ' 层' : ' 关') +
        ' · ' + s.melodyCount + ' 枚记忆连成 ' + s.lines.length + ' 句歌',
      infoHTML: s => '曲目难度 <b style="color:#ffd070">' + '◆'.repeat(s.tier) + '◇'.repeat(5 - s.tier) +
        '</b> · 编曲复杂度 <b style="color:#ffd070">' + s.complexity + '</b> / 100<br>' + s.info +
        '<br><span style="opacity:.70;font-size:10px">原创旋律与歌词 · 程序化生成，致敬华语流行抒情曲风</span>'
    });
  }

  /* ---------------- 唱片架：按通关进度解锁，自由试听整首 ---------------- */
  function unlockedTier() {
    let max = 0;
    for (const k in S.save.cleared) if (S.save.cleared[k]) max = Math.max(max, +k);
    return max === 0 ? 1 : tierOf(max);
  }
  function lvOfSong(i) { return 1 + (SONGBOOK[i].tier - 1) * 6 + (i % 3); }
  function renderJuke() {
    const g = $('jukeGrid'); if (!g) return;
    g.innerHTML = '';
    const ut = unlockedTier(), unlockedN = SONGBOOK.filter(s => s.tier <= ut).length;
    const sub = $('jukeSub');
    if (sub) sub.textContent = '已解锁 ' + unlockedN + ' / 15 首 · 每通关一章解锁下一档 3 首 · 点选试听整首与歌词';
    SONGBOOK.forEach((s, i) => {
      const locked = s.tier > ut;
      const d = document.createElement('div');
      d.className = 'jukeCard' + (locked ? ' lock' : '') + (i === S.jukeSel ? ' sel' : '');
      d.innerHTML = '<span class="jcTier">' + '◆'.repeat(s.tier) + '◇'.repeat(5 - s.tier) + '</span>' +
        '<span class="jcName">' + s.name + '</span>' +
        '<span class="jcMeta">' + MODE_N[s.mode] + ' · ' + s.bpm + ' BPM</span>' +
        '<span class="jcMeta">' + s.voices + ' 声部 · 复杂度 ' + songComplexity(s) + '</span>' +
        '<span class="jcMood">' + (locked ? '通关第 ' + ((s.tier - 1) * 6 + 1) + ' 关解锁' : s.mood) + '</span>';
      if (!locked) d.onclick = () => playJuke(i);
      g.appendChild(d);
    });
  }
  function playJuke(i) {
    const sg = SONGBOOK[i]; if (!sg || sg.tier > unlockedTier()) return;
    S.jukeSel = i;
    const demo = [0, 1, 2, 1, 0, 2, 1, 2, 0].map((f, k) => ({ freq: f, id: k }));
    const song = buildSong(demo, lvOfSong(i));
    S.jukeSong = song;
    renderJuke();
    performSong(song, {
      tag: $('jnTag'), info: $('jnInfo'), bar: $('jukeBarIn'), render: renderJukeLyrics,
      tagText: s => '♪ 正在试听《' + s.name + '》 · 第 ' + s.tier + ' 档 · ' + s.lines.length + ' 句歌',
      infoHTML: s => '<b style="color:#ffd070">编曲复杂度 ' + s.complexity + ' / 100</b> · ' + s.info +
        '<br><span style="opacity:.70">原创旋律与歌词 · 试听不消耗关卡进度</span>'
    });
  }
  function openJuke() {
    stopSong(); S.songPlaying = false;
    renderJuke();
    $('juke').classList.remove('hidden');
  }
  function stopJuke(close) {
    stopSong(); S.songPlaying = false;
    if (S.jukeSong) renderJukeLyrics(S.jukeSong, -1);
    const b = $('jukeBarIn'); if (b) b.style.width = '0%';
    if (close) $('juke').classList.add('hidden');
  }

  function finishPlay() {
    S.playing = false; $('btnPlay').disabled = false;
    const r = S.result;
    if (r.win) {
      S.won = true;
      const endless = S.mode === 'endless';
      const opt = optimalMoves(S.level);
      const stars = S.moves <= opt ? 3 : S.moves <= Math.ceil(opt * 1.8) ? 2 : 1;
      const starStr = '★'.repeat(stars) + '☆'.repeat(3 - stars);
      let head, bestTxt;
      if (endless) {
        const prev = S.endless.bestSteps[S.lv];
        const isBest = prev === undefined || S.moves < prev;
        if (isBest) S.endless.bestSteps[S.lv] = S.moves;
        S.endless.cleared++;
        S.endless.best = Math.max(S.endless.best, S.lv);
        persistEndless();
        head = '无尽 · 第 ' + S.lv + ' 层';
        bestTxt = isBest ? ' · 本层新纪录！' : ' · 本层最佳 ' + S.endless.bestSteps[S.lv] + ' 步';
      } else if (S.mode === 'theme') {
        head = '主题 · ' + S.level.name;
        bestTxt = ' · 主题挑战已完成';
      } else {
        const prev = S.save.best[S.lv];
        const isBest = prev === undefined || S.moves < prev;
        if (isBest) S.save.best[S.lv] = S.moves;
        S.save.cleared[S.lv] = 1;
        S.save.cur = Math.min(TOTAL, S.lv + 1);
        persist();
        head = '第 ' + S.lv + ' 关 · ' + S.level.name;
        bestTxt = isBest ? ' · 新纪录！' : ' · 最佳 ' + S.save.best[S.lv] + ' 步';
      }
      $('winText').innerHTML = head + '<br>' + S.level.story + '<br><br><span style="color:#ffd070">' +
        starStr + ' · 用了 ' + S.moves + ' 步' + bestTxt + '（最优 ' + opt + ' 步）</span>';
      $('btnNext').textContent = endless ? '下 一 层' : (S.lv >= TOTAL ? '回 到 回 廊' : '下 一 段');
      // 本层点亮的节点音连成整段旋律，通关后播放并逐字点亮歌词
      S.song = buildSong(S.melody, S.lv);
      setTimeout(() => { $('win').classList.remove('hidden'); playSong(S.song); }, 420);
    } else {
      const last = r.activated.length;
      const fault = r.trace.reduce((found, frame) => found || frame.events.find(e =>
        e.t === 'wrong' || e.t === 'gate' || e.t === 'locked' || e.t === 'block'), null);
      AU.fragments(S.melody);   // 失败也把已点亮的音倒着放一遍，像散掉的回声
      let diagnosis = last ? '回声在第 ' + (last + 1) + ' 枚记忆前散了。' : '回声还没走到第一枚记忆。';
      if (fault) {
        const where = '（第 ' + (fault.x + 1) + ' 列 / 第 ' + (fault.y + 1) + ' 行）';
        if (fault.t === 'wrong') diagnosis += '这里的频率与记忆节点不匹配' + where + '，检查前一个调频器。';
        else if (fault.t === 'gate') diagnosis += '这道门尚未开启' + where + '，确认前一枚记忆是否按顺序点亮。';
        else if (fault.t === 'locked') diagnosis += '这里的记忆顺序被锁定' + where + '，先寻找编号更小的节点。';
        else diagnosis += '回声撞上了阻断墙' + where + '，重新检查镜面的反射方向。';
      } else diagnosis += '检查镜面方向与调频器，再播放一次。';
      toast(diagnosis, 4200);
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
    if (S.hintsLeft <= 0) { toast('本关提示已用完，试着自己听出顺序', 2400); return; }
    const sol = S.level.solution;
    for (const k in sol.mirrors) if ((S.cfg.mirrors[k] ?? 0) !== sol.mirrors[k]) {
      S.hintKey = +k; S.hintUntil = performance.now() + 2600; S.hintsLeft--;
      toast('提示：高亮的那面镜子，方向不对（剩余 ' + S.hintsLeft + ' 次）', 2600); return;
    }
    for (const k in sol.tuners) if ((S.cfg.tuners[k] ?? 0) !== sol.tuners[k]) {
      S.hintKey = +k; S.hintUntil = performance.now() + 2600; S.hintsLeft--;
      toast('提示：高亮的调频器，频率不对（剩余 ' + S.hintsLeft + ' 次）', 2600); return;
    }
    toast('机关都对了，点「播放回声」试试');
  }
  function openLevels() {
    if (S.mode === 'endless') { openEndless(); return; }
    const g = $('levelGrid'); g.innerHTML = ''; g.classList.remove('endlessGrid');
    $('levelsHead').textContent = '余 响 回 廊';
    $('levelsSub').textContent = '共 30 关 · 5 章 · 每章引入新的连锁机关';
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
  function openEndless() {
    const g = $('levelGrid'); g.innerHTML = ''; g.classList.add('endlessGrid');
    $('levelsHead').textContent = '无 尽 回 廊';
    $('levelsSub').textContent = '最远 ' + S.endless.best + ' 层 · 累计通关 ' + S.endless.cleared +
      ' 层 · 每层都由生成器逐层验证可解';
    const section = t => { const d = document.createElement('div'); d.className = 'chapTitle'; d.textContent = t; g.appendChild(d); };
    const card = (title, sub, fn) => {
      const d = document.createElement('div');
      d.className = 'lvCard' + (fn ? '' : ' done');
      d.innerHTML = '<span class="n">' + title + '</span><span class="s">' + sub + '</span>';
      if (fn) d.onclick = fn;
      g.appendChild(d);
      return d;
    };
    section('继续挑战');
    card('第 ' + (S.endless.best || 1) + ' 层', '从最远处继续', () => startEndless(S.endless.best || 1));
    card('第 1 层', '从头重开', () => startEndless(1));
    section('历史记录');
    card(S.endless.best + ' 层', '最远层数', null);
    card(S.endless.cleared + ' 层', '累计通关', null);
    section('返回');
    card('剧情回廊', '30 关 · 选择关卡', () => { S.mode = 'story'; openLevels(); }).style.gridColumn = '1 / -1';
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
  $('btnJuke').onclick = openJuke;
  $('btnJuke2').onclick = openJuke;
  $('jukeClose').onclick = () => stopJuke(true);
  $('jukeStop').onclick = () => stopJuke(false);
  $('levelsClose').onclick = () => $('levels').classList.add('hidden');
  $('storyOk').onclick = () => $('story').classList.add('hidden');
  $('btnStart').onclick = () => loadLevel(1);
  $('contLv').textContent = S.save.cur || 1;
  $('btnContinue').onclick = () => loadLevel(S.save.cur || 1);
  $('btnLevelSel').onclick = openLevels;
  $('btnEndless').onclick = () => startEndless(S.endless.best || 1);
  $('btnHelp').onclick = () => $('help').classList.remove('hidden');
  $('btnHelp2').onclick = () => $('help').classList.remove('hidden');
  $('helpClose').onclick = () => $('help').classList.add('hidden');
  $('btnNext').onclick = () => {
    stopSong();
    if (S.mode === 'theme') { if (typeof window.__ECHO_THEME_NEXT__ === 'function') window.__ECHO_THEME_NEXT__(); else $('win').classList.add('hidden'); }
    else if (S.mode === 'endless') startEndless(S.lv + 1);
    else S.lv >= TOTAL ? openLevels() : loadLevel(S.lv + 1);
  };
  $('btnWinLevels').onclick = () => { stopSong(); openLevels(); };
  $('btnReplay').onclick = () => { stopSong(); $('win').classList.add('hidden'); S.won = false; S.activated = []; S.melody = []; buildNodeRow(); };
  $('btnReplaySong').onclick = () => { if (S.song) playSong(S.song); };
  $('btnSpeak').onclick = () => { if (S.song) AU.speak(S.song.lines); };
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
  window.__ECHO2D__ = { S, genLevel, simulate, loadLevel, loadCustomLevel, play, AU, finishPlay,
    buildSong, playSong, stopSong, lyricsFor, optimalMoves, LYRICS, SCALE,
    SONGBOOK, songForLevel, tierOf, MODES, MODE_N, MODE_TIER, songComplexity,
    openJuke, playJuke, renderJuke, unlockedTier, lvOfSong, stopJuke,
    genEndlessLevel, startEndless, openEndless, loadEndless, ENDLESS_KEY,
    get total() { return TOTAL; } };
})();
