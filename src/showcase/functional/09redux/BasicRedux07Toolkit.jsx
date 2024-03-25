import { Provider, useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../../constants"
import { useEffect } from "react"
import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit"

const counterInitialState = {
    value: 0,
    loading: false,
    error: null,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        incrementRequest: (state) => {
            state.loading = true
            state.error = false
        },
        incrementSuccess: (state, action) => {
            state.value = action.payload.value
            state.loading = false
            state.error = null
        },
        incrementFail:{
            reducer: (state, action) => {
                state.loading = false
                // TODO:
                state.error = action.error
            },
            prepare: (error) => {
                return {payload: {}, error}
            }
        }
    }
})

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
        dispatch(incrementSuccess(data))
    } catch (e) {
        console.error(e)
        dispatch(incrementFail({message: e.message}))
    }
}

const appReducer = combineSlices(
    counterSlice
)

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            // handle logout
            return appReducer(undefined, action) // re-init all state to initial states
        default:
            return appReducer(state, action)
    }
}

const store = configureStore({
    reducer: rootReducer
})

const BasicRedux07Toolkit = () => {
    return (
        <>
            <Provider store={store}>
                <Child></Child>
            </Provider>
        </>
    )
}

// redux + react-redux + thunk + immer + helper

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

export default BasicRedux07Toolkit