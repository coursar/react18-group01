import { useState, useSyncExternalStore } from "react"
import { Provider, useDispatch, useSelector, useStore } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"

// 1. Store, action types/creators, reducer
// 2. <Provider store={store}><App></App></Provider>
// 3. useSelector() - read state part, useDispatch - dispatch

// action types
const INCREMENT = 'INCREMENT'

// action creators
const increment = () => {
    return {
        type: INCREMENT
    }
}

// store
//  state: plain object (by default undefined)
//  reducer -> action (plain object -> POJO) -> new state
const selectCounter = (state) => state.counter

const counterInitialState = {
    value: 0
}
// state = undefined => initialState
const counterReducer = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, value: state.value + 1 }
        default:
            return state
    }
}

// slice:
//  - user: { loading: true, data: {id, ..., avatar}, error: null }
//  - currentRepo: { loading: true, data: { ... }, error: null }
//  - counter: { value: ... }

// TODO: wrap to root reducer
const appReducer = combineReducers({
    // user: userReducer,
    counter: counterReducer,
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            // handle logout
            return appReducer(undefined, action) // re-init all state to initial states
        default:
            return appReducer(state, action)
    }
}

const store = legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
    store.dispatch(increment())
    console.log('update store')
}, 5000)

const BasicRedux03DebugEnhanced = () => {
    return (
        <>
            <Provider store={store}>
                <Child></Child>
            </Provider>
        </>
    )
}

const Child = () => {
    // const store = useStore()
    const {value} = useSelector(selectCounter) // { value: 0}
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(increment())
    }

    return (
        <>
            <button onClick={handleClick}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux03DebugEnhanced