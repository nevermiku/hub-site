/* 回声 ECHO 3D · Service Worker */
const V = 'echo3d-v3-0-0';
const CORE = ['./', './index.html', './game.js', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return;
  if (u.pathname.includes('/sfx/')) {
    e.respondWith(caches.match(e.request).then(h => h || fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r;
    })));
    return;
  }
  e.respondWith(fetch(e.request).then(r => {
    const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r;
  }).catch(() => caches.match(e.request).then(h => h || caches.match('./index.html'))));
});
