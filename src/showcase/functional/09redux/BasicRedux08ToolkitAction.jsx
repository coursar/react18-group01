import { Provider, useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"
import { combineSlices, configureStore, createAction, createSlice } from "@reduxjs/toolkit"

// Redux Toolkit:
//  1. createSlice + combineSlices + configureStore
//  2*. createAction

// const action = createAction('auth/logout')
// // dispatch(action('some data'))
// const created = action('some data')
// debugger
const logout = createAction('auth/logout')

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
        // for custom action
        incrementFail: {
            // action.payload = {message: error}
            // ->
            // action.error = {message: error}
            reducer: (state, action) => { 
                // return {...state, loading: false, error: action.error }
                state.loading = false
                state.error = action.error
            },
            // dispatch(incrementFail(e))
            prepare: (payload) => {
                return {payload: {}, error: payload} // type will be added by redux toolkit
            }
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
        if (!response.ok) { // !2xx
            throw new Error(response.statusText)
        }
        // RT: actionCreator(any) => {type: actionCreator.type, payload: any}
        dispatch(incrementSuccess(data))
    } catch (e) {
        console.error(e)
        // TODO: fix error
        // payload: {data: ..., error: ..., status: 'success|error'}
        dispatch(incrementFail({message: e.message}))
    }
}

/*
const appReducer = combineReducers({
    // user: userReducer,
    [counterSlice.name]: counterSlice.reducer,
})
*/
const appReducer = combineSlices(
    counterSlice
)

const rootReducer = (state, action) => {
    switch (action.type) {
        case logout.type:
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

const BasicRedux08ToolkitAction = () => {
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

    const handleIncrement = async () => {
        dispatch(increment()) // async(dispatch)
    }

    const handleLogout = async () => {
        dispatch(logout()) // async(dispatch)
    }

    return (
        <>
            {error && <>{error.message}</>}
            {loading && <>Loading...</>}
            <button onClick={handleLogout}>Logout</button>
            <button disabled={loading} onClick={handleIncrement}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux08ToolkitAction