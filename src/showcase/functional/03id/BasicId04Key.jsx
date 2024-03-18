import { useId, useState } from "react"

const BasicId04Key = () => {
    const [state, setState] = useState(0)
    
    const handleClick = () => {
        setState(prev => prev+ 1)
    }

    return (
        <>
            {state}
            <button onClick={handleClick}>click</button>
            {/* logical error in most cases, not error in very advanced cases */}
            <Child key={state}></Child>
        </>
    )
}

const Child = () => {
    const id = useId()

    return (
        <>
            <div data-id={id}>some content</div>
        </>
    )
}

export default BasicId04Key