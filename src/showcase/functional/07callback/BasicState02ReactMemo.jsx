import { useState, memo } from "react"

const BasicCallback02ReactMemo = () => {
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

const Child = memo((props) => {
    return (
        <>
            <div>{props.childState}</div>
            <GrandChild></GrandChild>
        </>
    )
})

const GrandChild = (props) => {
    return (
        <>
            <div>Grand Child</div>
        </>
    )
}

export default BasicCallback02ReactMemo