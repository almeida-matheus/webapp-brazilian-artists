var DATA_CACHE_NAME = 'brazilian-artists-cache-v1';
var URLS_TO_CACHE = [
	'index.html'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(DATA_CACHE_NAME)
			.then(function (cache) {
				return cache.addAll(URLS_TO_CACHE);
			})
	);
});

self.addEventListener('fetch', function dataCacheName(event) {
	event.respondWith(
		caches.open(DATA_CACHE_NAME)
			.then(function (cache) {
				return cache.match(event.request)
					.then(function (response) {
						return response || fetch(event.request)
							.then(function (response) {
								cache.put(event.request, response.clone());
								return response;
							});
					});
			})
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(keys
				.filter(function(key) {
					return key.indexOf(DATA_CACHE_NAME) !== 0;
				})
				.map(function(key) {
					return caches.delete(key);
				})
			);
		})
	);
});