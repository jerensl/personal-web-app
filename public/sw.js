if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const t=e=>s(e,c),r={module:{uri:c},exports:o,require:t};n[c]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("worker-o7dknaWO8mUfqQo-kh4W7.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/196-1b714c0a7938e621.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/582-dac73364131cc48a.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/675-e90b3b1de0bdf90e.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/780-678060c3f0f9442d.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/884-7e01ae7acf6853da.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/framework-beb51d85c0b60541.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/main-36e16df2a5fd6da1.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/404-b2e02dc804a25eb3.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/_app-2b6851e393924807.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/about-bce1714fe550e68b.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/blog-0f4460dced1b216e.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-9375353fad03af7a.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/pages/index-89320e75371b468e.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/chunks/webpack-043901969ab14c5d.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/css/a3b8d3ac85688de5.css",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/o7dknaWO8mUfqQo-kh4W7/_buildManifest.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/o7dknaWO8mUfqQo-kh4W7/_middlewareManifest.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/_next/static/o7dknaWO8mUfqQo-kh4W7/_ssgManifest.js",revision:"o7dknaWO8mUfqQo-kh4W7"},{url:"/favicon.ico",revision:"4f3db4d1746e4ec4b432089a13fdc99b"},{url:"/icons/android-icon-144x144.png",revision:"0a14de5a5a4ff3baf8b8e5fd84d50ab2"},{url:"/icons/android-icon-192x192.png",revision:"3969e23aad0617ac7dd049f048f8ef32"},{url:"/icons/android-icon-36x36.png",revision:"66d3997c24abf3594e270955b622443e"},{url:"/icons/android-icon-48x48.png",revision:"dca23a4f6164d18850cfa11b9ede5cca"},{url:"/icons/android-icon-72x72.png",revision:"f04561fa2e33b4955a052742e2d5f516"},{url:"/icons/android-icon-96x96.png",revision:"3684aff38d92dbac8b62fbbab0b24501"},{url:"/icons/apple-icon-114x114.png",revision:"6694b6d230a4c1f54d1c3c707fd7ff04"},{url:"/icons/apple-icon-120x120.png",revision:"f950116b18c0256e4b5e4bc0084cfe5c"},{url:"/icons/apple-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/apple-icon-152x152.png",revision:"034601f08ee6dafd892022d570a2447c"},{url:"/icons/apple-icon-180x180.png",revision:"0a971e3fc683cd9dc43a1376f23c9c94"},{url:"/icons/apple-icon-57x57.png",revision:"15ad23067a6c289d7c42b63b31989c6f"},{url:"/icons/apple-icon-60x60.png",revision:"1847133b42336a646cdede3691edaddf"},{url:"/icons/apple-icon-72x72.png",revision:"b497cf6a78f1fac7bb447706e9ad17d7"},{url:"/icons/apple-icon-76x76.png",revision:"7fa91a4ccd2a4f5278a6c32b3f1b855e"},{url:"/icons/apple-icon-precomposed.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/apple-icon.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/favicon-16x16.png",revision:"1db922d9b4515f4efcbf834776bd1d8b"},{url:"/icons/favicon-32x32.png",revision:"d11dcd897285bc02c49f4432f64c1ad6"},{url:"/icons/favicon-96x96.png",revision:"64960bedc8bbba715e2d18302c53621e"},{url:"/icons/ms-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/ms-icon-150x150.png",revision:"9f72f005b8ce3d44d4bc6d6dd50e9651"},{url:"/icons/ms-icon-310x310.png",revision:"5dd8d55fea8add3a6cf5807771f31a07"},{url:"/icons/ms-icon-70x70.png",revision:"bd948b617acf21111679c90d0900e618"},{url:"/manifest.json",revision:"442581290e76a6383715728ebbafdb93"},{url:"/robots.txt",revision:"dd4ba47a876a4bb44709ff83012c1d2e"},{url:"/sitemap.xml",revision:"cceea757401474fc886c0bf922f04133"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
