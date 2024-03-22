import { useCallback, useEffect, useState } from "react"

const BasicCallback06Deps = () => {
    const [state, setState] = useState(0)

    const doSomething = useCallback(() => { console.log('do') }, [])

    useEffect(() => {
        doSomething()
    }, [doSomething])

    // useEffect(() => {
    //     doSomething()
    // })

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
        </>
    )
}

export default BasicCallback06Deps