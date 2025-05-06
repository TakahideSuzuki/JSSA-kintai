self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  // デフォルトのフェッチ処理
});
