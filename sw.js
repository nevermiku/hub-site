/* 项目中枢 Service Worker
 * 策略：
 *   - 导航请求：网络优先，失败回退缓存的 index.html（离线可开壳）
 *   - 静态资源（同源 assets/chara/图标）：缓存优先，后台更新
 *   - 第三方 API（CloudBase、新闻接口、Live2D CDN）：不缓存，直连
 */
const VERSION = 'ph-1793806670';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('message', e => {
  if(e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // 跨域（API / CDN）一律直连，不介入
  if (url.origin !== self.location.origin) return;

  // 页面导航：网络优先，离线回退
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put('./index.html', copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // 同源静态资源：缓存优先
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) {
        fetch(req).then(res => {
          if (res && res.status === 200) caches.open(VERSION).then(c => c.put(req, res)).catch(() => {});
        }).catch(() => {});
        return hit;
      }
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
    })
  );
});
