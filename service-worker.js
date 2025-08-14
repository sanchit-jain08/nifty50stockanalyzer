self.addEventListener('install', event => {
  event.waitUntil(caches.open('nifty-shell-v1').then(cache => cache.addAll([
    '/',
    '/index.html',
    '/favicon.ico'
  ])));
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
