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

const BasicMemo01 = () => {
    const value = useMemo(() => work(1000), [])
    const [state, setState] = useState(0)

    // useLayoutEffect(() => {
    //     work(2000)
    // })

    // useEffect(() => {
    //     work(3000) // hard work -> throw away from event-loop
    // }) // logic error in most cases

    const handleClick = (ev) => {
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

export default BasicMemo01