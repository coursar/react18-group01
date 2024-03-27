import { Provider, useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"
import { combineSlices, configureStore, createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Redux Toolkit:
//  1. createSlice + combineSlices + configureStore
//  2*. createAction
//  3*. createAsyncThunk -> API based on promises
//  4. Redux Toolkit Query

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
    extraReducers: (builder) => {
        builder.addCase(increment.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(increment.fulfilled, (state, action) => {
            state.error = null
            state.value = action.payload.value
        })
        builder.addCase(increment.rejected, (state, action) => {
            state.error = action.error
        })
        // "promise.finally"
        builder.addMatcher(increment.settled, (state) => {
            state.loading = false
        })
    },
})

const increment = createAsyncThunk(
    `${counterSlice.name}/increment`,
    async () => {
        // see Promises
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        if (!response.ok) { // !2xx
            // if something not ok - throw error 
            // catch + dispatch(incrementFail({message: e.message}))
            /*
            prepare: (payload) => {
                return {payload: {}, error: payload} // type will be added by redux toolkit
            }
            */
            throw new Error(response.statusText)
        }
        // if everything ok - return data
        return data
    }
)

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

const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger)
})

const BasicRedux09AsyncThunk = () => {
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
        dispatch(increment())
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

export default BasicRedux09AsyncThunk