importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "STnetwork",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a22307732c751a197d8d.js",
    "revision": "ff0ed2099d851f12cd839d44bb71d92e"
  },
  {
    "url": "/_nuxt/layouts/default.cf1c60cb619dca54fd17.js",
    "revision": "27b634ebabf761d3dc3d3abb6d29f316"
  },
  {
    "url": "/_nuxt/manifest.cad36409a7f565a6347a.js",
    "revision": "dfaf44f5d0c6043e25517c35cc674e66"
  },
  {
    "url": "/_nuxt/pages/blog/_article.21e61451569b5166c562.js",
    "revision": "4280315e0bf591c5a36048744017ecc7"
  },
  {
    "url": "/_nuxt/pages/blog/index.e8c14e0efb41e0c8b913.js",
    "revision": "d249ae6187899b19abe6c309d6d43fd8"
  },
  {
    "url": "/_nuxt/pages/index.ce7d1fa559ba8c80f943.js",
    "revision": "6ecd94b2e1f0a3406143cbf70917d53f"
  },
  {
    "url": "/_nuxt/vendor.ad72d5d2a018498a51ae.js",
    "revision": "03b35c7138982e9bdecc20f88b195289"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

