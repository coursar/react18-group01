const id = new Date().getTime()
console.log(id)

const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
}

// no DOM, no window

const ports = new Set()

self.addEventListener('connect', (ev) => {
    console.log(ev)
    const [port] = ev.ports // const port = ev.ports[0]
    ports.add(port)

    port.start()
    port.addEventListener('message', (ev) => {
        for (const port of ports) {
            port.postMessage(new Date())
        }
    })
    // work(5000)
})