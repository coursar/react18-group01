import { useEffect, useLayoutEffect, useState } from "react"

const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
}

const BasicEffect01 = () => {
    // work(10000) hard work -> throw away from event-loop

    useLayoutEffect(() => {
        work(2000)
    })

    useEffect(() => {
        work(3000) // hard work -> throw away from event-loop
    }) // logic error in most cases

    const handleClick = (ev) => {
        // work(5000) hard work -> throw away from event-loop
    }

    return (
        <>
            <div>sample</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default BasicEffect01