// Lagrer appen på telefonen så den virker uten nett.
// Hvis du endrer noen av filene senere: øk versjonsnummeret under, så henter telefonen den nye versjonen.
const CACHE = "lisensquiz-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      return await fetch(req);
    } catch (err) {
      if (req.mode === "navigate") {
        const shell = await caches.match("index.html");
        if (shell) return shell;
      }
      return Response.error();
    }
  })());
});
