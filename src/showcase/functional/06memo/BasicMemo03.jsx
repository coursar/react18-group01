import { useEffect, useLayoutEffect, useMemo, useState } from "react"

const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
    return 'result'
}

// const value = work(1000)

const BasicMemo03 = () => {
    const [state, setState] = useState(0)
    const value = useMemo(() => work(state * 1000), [state])

    useLayoutEffect(() => {
        work(state * 1000)
    }, [state])

    useEffect(() => {
        work(state * 1000) // hard work -> throw away from event-loop
    }, [state]) // logic error in most cases

    const handleClick = (ev) => {
        work(state * 1000)
        setState(prev => prev + 1)
    }

    return (
        <>
            <div>{value}</div>
            <div>{state}</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default BasicMemo03