import { useState, useSyncExternalStore } from "react"

const listeners = new Set()
let state = JSON.parse(localStorage.getItem('state'))

const subscribe = (listener) => {
    listeners.add(listener)
    return () => {
        listeners.delete(listener)
    } // called by React to unsubcribe
}

const getSnapshot = () => {
    return state
}

const update = () => {
    state = {now: new Date().toUTCString()}
    localStorage.setItem('state', JSON.stringify(state))
    listeners.forEach(listener => listener())
}

// not fired on same page
window.addEventListener('storage', (ev) => {
    state = JSON.parse(localStorage.getItem('state'))
    listeners.forEach(listener => listener())
})

const BasicExternStore02LocalStorage = () => {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot) // subscribe(react listener)

    const handleClick = () => {
        update()
    }

    return (
        <>
            {snapshot?.now}
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default BasicExternStore02LocalStorage