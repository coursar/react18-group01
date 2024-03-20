import { useEffect, useLayoutEffect, useState } from "react"

const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
}

const BasicEffect04 = () => {
    const [state, setState] = useState(0)

    useLayoutEffect(() => {
        work(5000)
    })

    useEffect(() => {
        work(5000) // hard work -> throw away from event-loop
    })

    const handleClick = (ev) => {
        setState(1)
    }

    return (
        <>
            <div>sample</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default BasicEffect04