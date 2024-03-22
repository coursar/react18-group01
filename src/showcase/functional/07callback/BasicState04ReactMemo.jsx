import { useState, memo, forwardRef, useCallback } from "react"

const BasicCallback04ReactMemo = () => {
    const [state, setState] = useState(0)
    const childState = {
        content: 'content'
    }

    // useCallback
    const handleClick = useCallback(() => {
        setState(prev => prev + 1)
    }, [])

    // render1 = handleClick
    // render2 = handleClick
    // Object.is(render1 (handleClick), render2 (handle)) -> new object

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
            <div>{props.childState.content}</div>
            <button onClick={props.onClick}>click me (in child)</button>
        </>
    )
})

export default BasicCallback04ReactMemo