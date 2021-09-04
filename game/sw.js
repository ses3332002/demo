const staticCacheName = 'static-cache-v3';
const dynamicCacheName = 'dynamic-cache-v3';

const staticAssets = [
  './',
  './index.html',
  './icon.png',
  './apple-touch-icon.png',
  './style.css',
  './script.js',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('activate', async event => {
  const cachesKeys = await caches.keys();
  const checkKeys = cachesKeys.map(async key => {
    if (![staticCacheName, dynamicCacheName].includes(key)) {
      await caches.delete(key);
    }
  });
  await Promise.all(checkKeys);
});

self.addEventListener('fetch', event => {
  event.respondWith(checkCache(event.request));
});

async function checkCache(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || checkOnline(req);
}

async function checkOnline(req) {
  const cache = await caches.open(dynamicCacheName);
  try {
    const res = await fetch(req);
    await cache.put(req, res.clone());
    return res;
  } catch (error) {
    const cachedRes = await cache.match(req);
    if (cachedRes) {
      return cachedRes;
    } else if (req.url.indexOf('.html') !== -1) {
      return caches.match('./offline.html');
    } else {
      return caches.match('./no-image.jpg');
    }
  }
}
