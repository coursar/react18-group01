import { useState, useSyncExternalStore } from "react"

/* store */
const store = {
    listeners: new Set(),
    state: {now: new Date()},
}

// subscribe
const subscribe = (listener) => {
    debugger
    store.listeners.add(listener)
    return () => {
        debugger
        store.listeners.delete(listener)
    } // called by React to unsubcribe
}

// const listener = () => {}
// -> window.addEventListener('type', listener): store.listeners.add(listener)
// -> window.removeEventListener('type', listener): () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe: () => unsubscribe
// getState
const getSnapshot = () => {
    return store.state // Object.freeze({...store.state}) // -> Object.is
}

// dispatch(updateAction)
const update = () => {
    // reducer
    store.state = {...store.state, now: new Date()}
    // notify subscribers
    store.listeners.forEach(listener => listener())
}

setInterval(() => {
    update()
}, 5000)

const BasicExternStore01Plain = () => {
    const [state, setState] = useState(0)
    
    const handleClick = () => {
        setState(prev => prev+ 1)
    }

    return (
        <>
            {state}
            <button onClick={handleClick}>click</button>
            {/* logical error in most cases, not error in very advanced cases */}
            <Child key={state}></Child>
        </>
    )
}

const Child = () => {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot) // subscribe(react listener)

    return (
        <>
            {snapshot.now.toUTCString()}
        </>
    )
}

export default BasicExternStore01Plain