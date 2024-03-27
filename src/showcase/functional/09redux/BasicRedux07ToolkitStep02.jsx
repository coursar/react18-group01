import { Provider, useDispatch, useSelector } from "react-redux"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"
import { thunk } from "redux-thunk"
import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterInitialState = {
    value: 0,
    loading: false,
    error: null,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        // type = 'counter/incrementRequest'
        incrementRequest: (state, action) => {
            // return {...state, loading: true, error: null }
            state.loading = true
            state.error = null
        },
        incrementSuccess: (state, action) => {
            // return {...state, value: action.payload.value, loading: false, error: null }
            state.loading = false
            state.error = null
            state.value = action.payload.value
        },
        incrementFail: (state, action) => { 
            // return {...state, loading: false, error: action.error }
            // TODO:
        }
    }
})

// 1. selector
// const selectCounter = (state) => state.counter
// =
// counterSlice.selectCount

// 2. reducer 
/*
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
*/
// =
// counterSlice.reducer

// 3. action creators + action
/*
const INCREMENT_REQUEST = 'INCREMENT_REQUEST' // action type
const incrementRequest = () => { // action creator
    return {
        type: INCREMENT_REQUEST
    }
}
*/
// =
// action creator = counterSlice.actions.incrementRequest
// action type = counterSlice.actions.incrementRequest.type
const {incrementRequest, incrementSuccess, incrementFail} = counterSlice.actions

const increment = () => async (dispatch) => {
    try {
        dispatch(incrementRequest())
        const response = await fetch(`${API_URL}`)
        const data = await response.json() // error: ...
        // TODO: validate data
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        // RT: actionCreator(any) => {type: actionCreator.type, payload: any}
        dispatch(incrementSuccess(data))
    } catch (e) {
        console.error(e)
        // TODO: fix error
        dispatch(incrementFail(e))
    }
}


// TODO: wrap to root reducer
const appReducer = combineReducers({
    // user: userReducer,
    counter: counterSlice.reducer,
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

// Store -> configureStore
//  1. middleware -> redux-thunk
//  2. Redux DevTools

const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger)
})

const BasicRedux07ToolkitStep02 = () => {
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
    const {value, loading, error} = useSelector(counterSlice.selectSlice) // { value: 0}
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(creator())
        dispatch(increment()) // want: dispatch(increment())
    }, [])

    const handleClick = async () => {
        dispatch(increment()) // async(dispatch)
    }

    return (
        <>
            {loading && <>Loading...</>}
            <button disabled={loading} onClick={handleClick}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux07ToolkitStep02