import { useState, useSyncExternalStore } from "react"
import { legacy_createStore } from "redux"

const INCREMENT = 'INCREMENT'

// store
//  state: plain object (by default undefined)
//  reducer -> action (plain object -> POJO) -> new state
const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, value: state.value + 1 }
        default:
            return state
    }
}

const initialState = {
    value: 0
}
const store = legacy_createStore(reducer, initialState)
store.subscribe(() => {
    // fires only on dispatch
    console.log(store.getState())
})

store.dispatch({
    type: 'INIT' // don't write reducer!
})

let remain = 3
const intervalId = setInterval(() => {
    remain--
    if (remain <= 0) {
        clearInterval(intervalId)
    }
    // action:
    //  1. POJO
    //  2. type - TEXT
    //  3. convention:
    //     - payload
    //     - error
    //     - meta
    store.dispatch({
        type: INCREMENT
    })
}, 5000)

const BasicRedux01Debug = () => {
    const snapshot = useSyncExternalStore(store.subscribe, store.getState) // subscribe(react listener)

    // not use useCallback here
    const handleClick = () => {
        store.dispatch({
            type: INCREMENT
        })
    }

    return (
        <>
            <button onClick={handleClick}>{snapshot.value} Click Me</button>
        </>
    )
}

export default BasicRedux01Debug