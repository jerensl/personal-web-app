if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const d=e=>a(e,n),o={module:{uri:n},exports:f,require:d};i[n]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(s(...e),f)))}}define(["./workbox-96960ea3"],(function(e){"use strict";importScripts("worker-ovKsV1G2i8G6RKO49P-em.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/_next/static/chunks/135.6336457464090233.js",revision:"6336457464090233"},{url:"/_next/static/chunks/286.2eea73211ef3910e.js",revision:"2eea73211ef3910e"},{url:"/_next/static/chunks/29107295.4bff61ed8da540a8.js",revision:"4bff61ed8da540a8"},{url:"/_next/static/chunks/2cca2479-233a8feaa04e3ceb.js",revision:"233a8feaa04e3ceb"},{url:"/_next/static/chunks/443-836957910977f133.js",revision:"836957910977f133"},{url:"/_next/static/chunks/467-c95002b09b8fe791.js",revision:"c95002b09b8fe791"},{url:"/_next/static/chunks/469-aeb68169456d8259.js",revision:"aeb68169456d8259"},{url:"/_next/static/chunks/538.24f6fde9fed883f2.js",revision:"24f6fde9fed883f2"},{url:"/_next/static/chunks/866.95da0b13238ee27e.js",revision:"95da0b13238ee27e"},{url:"/_next/static/chunks/949-4aa42413b546b79a.js",revision:"4aa42413b546b79a"},{url:"/_next/static/chunks/e85c8870.6e2c849ef7c4e95a.js",revision:"6e2c849ef7c4e95a"},{url:"/_next/static/chunks/framework-4b8f976cb91b82d0.js",revision:"4b8f976cb91b82d0"},{url:"/_next/static/chunks/main-1fbd9cf74465837f.js",revision:"1fbd9cf74465837f"},{url:"/_next/static/chunks/pages/404-ff491bedf8b04e5e.js",revision:"ff491bedf8b04e5e"},{url:"/_next/static/chunks/pages/_app-788a0cba342fa3cf.js",revision:"788a0cba342fa3cf"},{url:"/_next/static/chunks/pages/_error-83a32679c349f7a2.js",revision:"83a32679c349f7a2"},{url:"/_next/static/chunks/pages/about-7d229bc0ebf8785f.js",revision:"7d229bc0ebf8785f"},{url:"/_next/static/chunks/pages/blog-6a3121d8a02326ee.js",revision:"6a3121d8a02326ee"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-ab539ae129da5cb1.js",revision:"ab539ae129da5cb1"},{url:"/_next/static/chunks/pages/index-187865b5736f72b5.js",revision:"187865b5736f72b5"},{url:"/_next/static/chunks/pages/project-8a73942b3aad9d95.js",revision:"8a73942b3aad9d95"},{url:"/_next/static/chunks/pages/project/%5Bslug%5D-1e3649cf69f59019.js",revision:"1e3649cf69f59019"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-938cc562bf7ff1cc.js",revision:"938cc562bf7ff1cc"},{url:"/_next/static/css/82499e54f345a32f.css",revision:"82499e54f345a32f"},{url:"/_next/static/media/07103e16d41c9190-s.woff2",revision:"865bfc77817e078122fba2ff0a8e259c"},{url:"/_next/static/media/0fb93cc812fb4b50-s.woff2",revision:"a18ad80bf268ef612116d884c2af418f"},{url:"/_next/static/media/13017c58cf72aedd-s.woff2",revision:"6007c746e2785673234104b918d8e3ec"},{url:"/_next/static/media/21633f890e359fee-s.woff2",revision:"cb99b126275a25f969a1a17428869eb4"},{url:"/_next/static/media/293d9d85a89f760b-s.woff2",revision:"5568baada3de241152dfdcfc15bfdbf0"},{url:"/_next/static/media/32702a3715dbd7c1-s.woff2",revision:"8c6c9a0ed2815ab4659cf6f10388aea2"},{url:"/_next/static/media/38ebcf0298551099-s.woff2",revision:"033d8b2a4bd7fddccb3e0b891f65ebbe"},{url:"/_next/static/media/3a8dc5763a8ae4b2-s.p.woff2",revision:"3d5fc7758046950deb331db2ea1bb354"},{url:"/_next/static/media/6dc02f179ba8da8f-s.woff2",revision:"ec321a873a0a3dbb51083da484c6182c"},{url:"/_next/static/media/7b9ca6a1d31c5662-s.p.woff2",revision:"817c5aeb992050a67c54c8bf028a28a8"},{url:"/_next/static/media/84a39d905077a976-s.woff2",revision:"cd3fed32b75d04b79cf48a95ef63b9a5"},{url:"/_next/static/media/8976b37f8037a4c0-s.woff2",revision:"981e5326f318811beab9171f2af3255c"},{url:"/_next/static/media/931105f8d96e7f26-s.p.woff2",revision:"6d1f2c44bd135848c7321937f7371e37"},{url:"/_next/static/media/9450a5aa688b86af-s.woff2",revision:"ad7ab63936b2f4518d04ebbdf704c8ca"},{url:"/_next/static/media/9c526da3fdc4ac93-s.woff2",revision:"720060411c9cc14a53c5ec1e514d7e7c"},{url:"/_next/static/media/ada9171bd6839183-s.woff2",revision:"9e6ef6d2be89be13d2ce186ef7fccc46"},{url:"/_next/static/media/b0059268cc419911-s.woff2",revision:"a7f4b74ef28825cce3f205bff67c9323"},{url:"/_next/static/media/b53e832d745212bc-s.woff2",revision:"330dec86fdfff71ea576b1456aa8b1d3"},{url:"/_next/static/media/bd2489da38fb1d0b-s.woff2",revision:"ca4dd28ee25e096804bbb0dab6fc7dfe"},{url:"/_next/static/media/c7a495162773a63f-s.p.woff2",revision:"7db919af8577843004c4b5f564d9aa23"},{url:"/_next/static/media/d364c42434837330-s.woff2",revision:"998b1320fd70ef6ded72784a7f86e2b2"},{url:"/_next/static/media/e80e9c14bdf82dd6-s.woff2",revision:"5b9e8288b8eac8b9b5c9239e1e7c8eeb"},{url:"/_next/static/media/ef3f4e253ce73be8-s.woff2",revision:"87b8cf1c8e2380fe1e3c000bd48ed5c6"},{url:"/_next/static/media/f0b16be9a95e8820-s.woff2",revision:"48487e645e8bd5ac883f1175b4efdfe0"},{url:"/_next/static/media/f1d4c48219b1bd72-s.woff2",revision:"e46df47bb1e1cf796f08f67211174cef"},{url:"/_next/static/media/f2988470e2e746be-s.woff2",revision:"89143b5f41037c26ec098f61cff925dc"},{url:"/_next/static/media/fbdbe464b9e5cc95-s.p.woff2",revision:"10d972b68f617d88f222c728a169e5f2"},{url:"/_next/static/ovKsV1G2i8G6RKO49P-em/_buildManifest.js",revision:"3c4c6ea696b8dfd2a1dd6d9177f14185"},{url:"/_next/static/ovKsV1G2i8G6RKO49P-em/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"4f3db4d1746e4ec4b432089a13fdc99b"},{url:"/firebase-messaging-sw.js",revision:"de0088eeac2b9f80bc65914092090b58"},{url:"/icons/android-icon-144x144.png",revision:"0a14de5a5a4ff3baf8b8e5fd84d50ab2"},{url:"/icons/android-icon-192x192.png",revision:"3969e23aad0617ac7dd049f048f8ef32"},{url:"/icons/android-icon-36x36.png",revision:"66d3997c24abf3594e270955b622443e"},{url:"/icons/android-icon-48x48.png",revision:"dca23a4f6164d18850cfa11b9ede5cca"},{url:"/icons/android-icon-72x72.png",revision:"f04561fa2e33b4955a052742e2d5f516"},{url:"/icons/android-icon-96x96.png",revision:"3684aff38d92dbac8b62fbbab0b24501"},{url:"/icons/apple-icon-114x114.png",revision:"6694b6d230a4c1f54d1c3c707fd7ff04"},{url:"/icons/apple-icon-120x120.png",revision:"f950116b18c0256e4b5e4bc0084cfe5c"},{url:"/icons/apple-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/apple-icon-152x152.png",revision:"034601f08ee6dafd892022d570a2447c"},{url:"/icons/apple-icon-180x180.png",revision:"0a971e3fc683cd9dc43a1376f23c9c94"},{url:"/icons/apple-icon-57x57.png",revision:"15ad23067a6c289d7c42b63b31989c6f"},{url:"/icons/apple-icon-60x60.png",revision:"1847133b42336a646cdede3691edaddf"},{url:"/icons/apple-icon-72x72.png",revision:"b497cf6a78f1fac7bb447706e9ad17d7"},{url:"/icons/apple-icon-76x76.png",revision:"7fa91a4ccd2a4f5278a6c32b3f1b855e"},{url:"/icons/apple-icon-precomposed.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/apple-icon.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/favicon-16x16.png",revision:"1db922d9b4515f4efcbf834776bd1d8b"},{url:"/icons/favicon-32x32.png",revision:"d11dcd897285bc02c49f4432f64c1ad6"},{url:"/icons/favicon-512x512.png",revision:"fceb71b0d16221759098361649c86e40"},{url:"/icons/favicon-96x96.png",revision:"64960bedc8bbba715e2d18302c53621e"},{url:"/icons/icon-128x128.png",revision:"aa343d8e9a42fe86917605c01e389b4f"},{url:"/icons/icon-144x144.png",revision:"53f8763471beb4dc403d4c01c85357c4"},{url:"/icons/icon-152x152.png",revision:"d071690badb69164f1d72d2309353c45"},{url:"/icons/icon-192x192.png",revision:"e4f59bbdb8cf5d888c04c1518e20c595"},{url:"/icons/icon-284x284.png",revision:"dd652e7baa402c7ca6427eb85ed118df"},{url:"/icons/icon-48x48.png",revision:"349f5f6ecb2177074d20db20f43f0fdb"},{url:"/icons/icon-512x512.png",revision:"1aa989c47e8dd2990c82ab9a1cf6c2c3"},{url:"/icons/icon-72x72.png",revision:"b2405377d48d40a28bd885d90bcf6f35"},{url:"/icons/icon-96x96.png",revision:"7c9cb5d23ae70e8a13243addbabd2019"},{url:"/icons/ms-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/ms-icon-150x150.png",revision:"9f72f005b8ce3d44d4bc6d6dd50e9651"},{url:"/icons/ms-icon-310x310.png",revision:"5dd8d55fea8add3a6cf5807771f31a07"},{url:"/icons/ms-icon-70x70.png",revision:"bd948b617acf21111679c90d0900e618"},{url:"/images/banner-og.png",revision:"c3b53487a7b458d3768395ce5f8b00b5"},{url:"/images/blank-image.jpg",revision:"51879f9aeaaf6060aa42a64df71696f1"},{url:"/images/default-content.webp",revision:"48a1e8455fe208429df9bc15277bb9a6"},{url:"/images/illustration-landing-page.webp",revision:"0c27a06f16c0d6cdd034c128e57971ad"},{url:"/images/view-notification.png",revision:"e66d8a1ab22ab3913ed1aa12080488d5"},{url:"/manifest.json",revision:"9260a1c954b68dcf46adb13abb09e09b"},{url:"/mockServiceWorker.js",revision:"9813879e2cb2250c724a94396371f94c"},{url:"/robots.txt",revision:"dd4ba47a876a4bb44709ff83012c1d2e"},{url:"/rss.xml",revision:"c8ea3ec1537d9309bdb52a7a731b5626"},{url:"/sitemap-0.xml",revision:"42ebac54d95a931fc45f5ef5d0030a5f"},{url:"/sitemap.xml",revision:"260c5752b34a3009454a7d4bb0d88551"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
