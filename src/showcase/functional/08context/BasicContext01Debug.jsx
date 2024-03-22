import { createContext, useCallback, useContext, useMemo, useState } from "react"

// in separate file
const ThemeContext = createContext(null)
ThemeContext.displayName = 'ThemeContext'
console.log(ThemeContext)

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context == null) {
        throw new Error('No ThemeContext provided');
    }

    return context;
}

// in separate file
const ThemeContextProvider = (props) => {
    const [localState, setLocalState] = useState(0)
    const [contextState, setContextState] = useState('light')

    const handleClickLocalState = () => {
        setLocalState(prev => prev + 1)
    }

    const handleClickContextState = () => {
        setContextState(prev => prev === 'light' ? 'dark' : 'light')
    }

    const setLightTheme = useCallback(() => {
        setContextState('light')
    }, [])

    const setDarkTheme = useCallback(() => {
        setContextState('dark')
    }, [])

    const contextValue = useMemo(() => ({
        contextState,
        setContextState,
        setLightTheme,
        setDarkTheme
    }), [contextState, setLightTheme, setDarkTheme])

    return (
        <>
            <button onClick={handleClickLocalState}>{localState} Change Local</button>
            <button onClick={handleClickContextState}>{contextState} Change Context</button>
            <ThemeContext.Provider value={contextValue}>
                {props.children}
            </ThemeContext.Provider>
        </>
    )
}

// TODO: throw error if no context

const BasicContext01Debug = () => {
    return (
        <>
            <ThemeContextProvider>
                <Child></Child>
            </ThemeContextProvider>
        </>
    )
}

const Child = () => {
    return (
        <>
            <GrandChild></GrandChild>
            <SwitchTheme></SwitchTheme>
        </>
    )
}

const GrandChild = () => {
    const {contextState} = useThemeContext() // {contextState, setContextState}

    return (
        <>
            <div>{contextState}</div>
        </>
    )
}

const SwitchTheme = () => {
    const {contextState, setLightTheme, setDarkTheme} = useThemeContext()

    return (
        <>
            current: {contextState}
            <button onClick={() => setLightTheme}>Ligth</button>
            <button onClick={() => setDarkTheme}>Dark</button>
        </>
    )
}

export default BasicContext01Debug