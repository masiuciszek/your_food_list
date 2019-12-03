const CACHE_NAME = 'food-for-you';
const urlsToCache = [
  '/',
  '/index.html',

];

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }),
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['food-for-you'];
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});


// NEW


// self.addEventListener('install', (event) => {
//   const offlineRequest = new Request('offline.html');
//   event.waitUntil(
//     fetch(offlineRequest).then((response) => caches.open('offline').then((cache) => {
//       console.log('[oninstall] Cached offline page', response.url);
//       return cache.put(offlineRequest, response);
//     })),
//   );
// });

// self.addEventListener('fetch', (event) => {
//   const { request } = event;


//   if (request.method === 'GET') {
//     event.respondWith(
//       fetch(request).catch((error) => {
//         console.error(
//           `[onfetch] Failed. Serving cached offline fallback ${
//             error}`,
//         );
//         return caches.open('offline').then((cache) => cache.match('offline.html'));
//       }),
//     );
//   }
// });
