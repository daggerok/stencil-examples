importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "dafd4eca1bd1b62bbead2c6f0298dd2d"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "52c31d60d8c07c076c8acd567e64448e"
  },
  {
    "url": "build/app.js",
    "revision": "1869af1fb9a47c5ff5c35001657d71e4"
  },
  {
    "url": "build/app.registry.json",
    "revision": "26797d592e085a05899686902c8dadac"
  },
  {
    "url": "build/app/app.2uafag5u.pf.js",
    "revision": "739aeba476f7a876a36ddb6f55606512"
  },
  {
    "url": "build/app/app.qsemgzik.js",
    "revision": "697d3cb2c584ad6ffd181293b6200264"
  },
  {
    "url": "build/app/t89fh3lc.js",
    "revision": "5a501be1ab5d104fdfa01e2cbcf14516"
  },
  {
    "url": "build/app/taqqg0q6.js",
    "revision": "cf729e38aa1b20dde79c60f2de171daa"
  },
  {
    "url": "build/app/uyykddxl.css",
    "revision": "3d50550407a0c0d076cccbe0d3ec717b"
  },
  {
    "url": "build/app/w2egy1rg.js",
    "revision": "5a181cbc412e10488558b20aab0ff24e"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "79084858024aeb49a89b828a319af119"
  },
  {
    "url": "manifest.json",
    "revision": "4a7bc9aaafaf15f0d1c0d2e41605963b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
