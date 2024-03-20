const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
}

// no DOM, no window

self.addEventListener('message', (ev) => {
    console.log(ev)
    work(5000)
    self.postMessage('result')
})