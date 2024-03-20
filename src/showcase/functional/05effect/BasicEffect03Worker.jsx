import { useEffect, useLayoutEffect, useState } from "react"

// render, effect -> hard work
const BasicEffect03Worker = () => {
    const [state, setState] = useState('calculate')

    useEffect(() => {
        // componentDidMount "analogue"
        const worker = new Worker(new URL('../../../effect-dedicated-worker.js', import.meta.url), {
          type: 'module'
        })

        worker.addEventListener('message', (ev) => {
          console.log(ev.data)
          setState(ev.data)
        })

        worker.postMessage('calculate')

        return () => { // cleaning function
          worker.terminate()
        }
    }, [])

    const handleClick = (ev) => {
        // work(5000) hard work -> throw away from event-loop
    }

    return (
        <>
            <div>{state}</div>
            <div>sample</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default BasicEffect03Worker