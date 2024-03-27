import { Provider, useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"
import { combineSlices, configureStore, createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const counterInitialState = {
    value: 0,
    loading: false,
    error: null,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment: (state) => {
            state.value++
        }
    }
})

const authInitialState = {
    authenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login: (state) => {
            state.authenticated = true
        },
        logout: (state) => {
            state.authenticated = false
        }
    }
})

const {login, logout} = authSlice.actions

const appReducer = combineSlices(
    counterSlice,
    authSlice,
)

const rootReducer = (state, action) => {
    switch (action.type) {
        case logout.type:
            // handle logout
            // localStorage.clear() - works but not good
            return appReducer(undefined, action) // re-init all state to initial states
        default:
            return appReducer(state, action)
    }
}

const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

const cleaner = (store) => (next) => (action) => {
    if (logout.match(action)) {
        localStorage.clear()
    }
    next(action)
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .prepend(logger)
        .prepend(cleaner)
})

const BasicRedux11ToolkitSSE = () => {
    return (
        <>
            <Provider store={store}>
                <Navbar></Navbar>
                <Child></Child>
            </Provider>
        </>
    )
}

const Navbar = () => {
    const {authenticated} = useSelector(authSlice.selectSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!authenticated) {
            return
        }
        const sse = new EventSource('http://localhost:9999')
        sse.addEventListener('message', (ev) => {
            store.dispatch(counterSlice.actions.increment())
        })

        return () => {
            sse.close()
        }
    }, [authenticated])

    const handleLogin = () => {
        dispatch(login())
    }

    const handleLogout = () => {
        dispatch(logout())
        // localStorage.clear()
    }

    return (
        <>
            <button onClick={authenticated ? handleLogout : handleLogin}>
                {authenticated ? 'Logout' : 'Login'}
            </button>
        </>
    )
}

const Child = () => {
    // const store = useStore()
    const {value, loading, error} = useSelector(counterSlice.selectSlice) // { value: 0}
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // dispatch(creator())
    //     dispatch(counterSlice.actions.increment()) // want: dispatch(increment())
    // }, [])

    const handleIncrement = async () => {
        dispatch(counterSlice.actions.increment())
    }

    return (
        <>
            {error && <>{error.message}</>}
            {loading && <>Loading...</>}
            <button disabled={loading} onClick={handleIncrement}>{value} Click Me</button>
        </>
    )
}

export default BasicRedux11ToolkitSSE