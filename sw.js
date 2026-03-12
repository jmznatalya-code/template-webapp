const CACHE = 'app-v1';
const ASSETS = [
  '/template-webapp/',
  '/template-webapp/index.html',
  '/template-webapp/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
