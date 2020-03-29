const staticvarsh = "varsh-flower"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/flowe1.jpeg",
  "/images/flower2.jpeg",
  "/images/flower3.jpeg",
  "/images/flower4.jpeg",
  "/images/flower5.jpeg",
  "/images/flower6.jpeg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticvarsh).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
