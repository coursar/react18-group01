self.oninstall = (ev) => {
    console.log(ev)
    ev.waitUntil(self.skipWaiting())
}

self.onactive = (ev) => {
    console.log(ev)
    ev.waintUntil(self.clients.claim())
}

self.onfetch = (ev) => {
    console.log('fetch')
    console.log(ev)

    if (ev.request.url.endsWith('/api/data.json')) {
        ev.respondWith(
            new Response(JSON.stringify([{id: 1}, {id: 2}]), {
                headers: {
                    'Content-Type': 'application/json'
                },
                status: 200
            })
        )
        return
    }

    ev.respondWith(fetch(ev.request))
}
