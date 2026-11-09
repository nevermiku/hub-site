/* 刀域突围 3D · Service Worker：核心资源预缓存 + 音效按需缓存 */
const V = 'aincrad3d-v45-0-0';
const CORE = ['./', './index.html', './game.js', './manifest.json', './enhance.js', './forge.js', './cinema.js', './landscape.js', './portal.css', './portal.js', './character-upgrade.js', './impact-upgrade.js', './hunt-arena.js', './class-combat.js', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  if (e.request.method !== 'GET') return;
  // 音效：缓存优先
  if (u.pathname.includes('/sfx/')) {
    e.respondWith(caches.match(e.request).then(h => h || fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r;
    })));
    return;
  }
  // 主页与脚本：网络优先，离线回退缓存
  e.respondWith(fetch(e.request).then(r => {
    const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r;
  }).catch(() => caches.match(e.request).then(h => h || caches.match('./index.html'))));
});
