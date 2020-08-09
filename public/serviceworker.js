const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    console.log('Service worker fetch event for URL: ')
});

//Activate the Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activate event')
});