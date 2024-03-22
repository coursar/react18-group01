import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// document.appendChild(...)

// const el = // <div></div> // babel -> 
// React.createElement(
//   'div',
//   {}, // props
// )
// console.dir(el)

// 1. Component -> fn, class, embed ('div', ...)
// 2. React Element (element * <-> 1 component)
//    class-based component:
//    2.1. const obj = new Component()
//    2.2. obj.render()

// 3. DOM Element

// 1. Phase -> Rendering: new component() <->.render(), fn()
// 2. Phase -> Commit (DOM)

/*
const obj = {
  type: 'div',
  _private: ... -> #private
}
*/

window.addEventListener('error', ev => {
  console.log(ev)
  // send error to server
})

// render -> pure function/method -> sin(in) -> out
// Dev mode differs from Prod
ReactDOM.createRoot(document.getElementById('root'), { identifierPrefix: 'app-' }).render(
  // <React.StrictMode>
  <Provider store={}>
    <App />
  </Provider>
  // </React.StrictMode>,
)

// Download a file
//  1. User Click on link -> url -> backend Content-Type application/octet-stream & other headers
//  2. Ajax -> Blob

// Upload a file
//  1. input file="..."
//  2. drag-and-drop (dnd)
//  3. new API

// Audio & Video
// Audio, Image, Video
// const audio = new Audio('url')
// audio.play(...)

// const audio = new Audio('/tg_msg_incoming.mp3')
// // button click
// setTimeout(() => {
//   audio.play()
// }, 5000)

// plain js without Vite
// const worker = new Worker('./worker.js', {
//   type: 'module'
// })
// const worker = new Worker(new URL('./dedicated-worker.js', import.meta.url), {
//   type: 'module'
// })

// const data = new Array(10000).fill(9)

// worker.addEventListener('message', (ev) => {
//   console.log(data) // original
//   console.log(ev.data) // data -> structured clone to worker -> worker -> structured clone to main
//   worker.terminate()
// })

// worker.postMessage({id: 1, data})

// unmount

// setTimeout(() => {
//   worker.terminate()
// }, 10000)


// plain js without Vite
// const worker = new SharedWorker('./worker.js', {
//   type: 'module'
// })
// const worker = new SharedWorker(new URL('./shared-worker.js', import.meta.url), {
//   type: 'module'
// })

// worker.port.start()
// worker.port.addEventListener('message', (ev) => {
//   console.log(ev.data)
// })

// worker.port.postMessage({id: 1})

// PWA -> offline:
//  - data cache
//  - cache html, js, css, image, ... resource

// try {
//   // /src -> scope '/'
//   const registration = await navigator.serviceWorker.register(new URL('../service-worker.js', import.meta.url), {
//     scope: '/'
//   })

//   setTimeout(async () => {
//     console.log('request')

//     const response = await fetch('/api/data.json')
//     const data = await response.json() 
//     console.log(data)

//   }, 10000)

// } catch (e) {
//   console.error(e)
// }
