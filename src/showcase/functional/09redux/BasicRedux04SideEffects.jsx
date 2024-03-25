import { Provider, useDispatch, useSelector } from "react-redux"
import { combineReducers, legacy_createStore } from "redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"

// 1. Store, action types/creators, reducer
// 2. <Provider store={store}><App></App></Provider>
// 3. useSelector() - read state part, useDispatch - dispatch

// action types
const INCREMENT_REQUEST = 'INCREMENT_REQUEST'
const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
const INCREMENT_FAIL = 'INCREMENT_FAIL'

// action creators
const incrementRequest = () => {
    return {
        type: INCREMENT_REQUEST
    }
}
const incrementSuccess = (payload) => {
    return {
        type: INCREMENT_SUCCESS,
        payload
    }
}
const incrementFail = (error) => {
    return {
        type: INCREMENT_FAIL,
        error
    }
}

const increment = async (dispatch) => {
    try {
        dispatch(incrementRequest())
        const response = await fetch(`${API_URL}`)
        const data = await response.json() // error: ...
        // TODO: validate data
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        dispatch(incrementSuccess(data))
    } catch (e) {
        console.error(e)
        dispatch(incrementFail(e))
    }
}

// store
//  state: plain object (by default undefined)
//  reducer -> action (plain object -> POJO) -> new state
const selectCounter = (state) => state.counter


const counterInitialState = {
    value: 0,
    loading: false,
    error: null,
}
// state = undefined => initialState
const counterReducer = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT_REQUEST:
            return {...state, loading: true, error: null }
        case INCREMENT_SUCCESS:
            return {...state, value: action.payload.value, loading: false, error: null }
        case INCREMENT_FAIL:
            return {...state, loading: false, error: action.error }
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

const BasicRedux04SideEffects = () => {
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
    const {value, loading, error} = useSelector(selectCounter) // { value: 0}
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(creator())
        increment(dispatch) // want: dispatch(increment())
    }, [])

    const handleClick = async () => {
        increment(dispatch)
    }

    return (
        <>
            {loading && <>Loading...</>}
            <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux04SideEffects