import { useState, memo, forwardRef } from "react"

const BasicCallback03ReactMemo = () => {
    const [state, setState] = useState(0)
    const [childState, setChildState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <div>{state} Click Me</div>
            <Child onClick={handleClick} childState={childState}></Child>
        </>
    )
}

const Child = memo(function Child(props) {
    return (
        <>
            <div>{props.childState}</div>
            <button onClick={props.onClick}>click me (in child)</button>
        </>
    )
})

export default BasicCallback03ReactMemo