import { useState } from "react"

const BasicCallback01Debug = () => {
    const [state, setState] = useState(0)
    const [childState, setChildState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
            <Child childState={childState}></Child>
        </>
    )
}

const Child = (props) => {
    return (
        <>
            <div>{props.childState}</div>
            <GrandChild></GrandChild>
        </>
    )
}

const GrandChild = (props) => {
    return (
        <>
            <div>Grand Child</div>
        </>
    )
}

export default BasicCallback01Debug