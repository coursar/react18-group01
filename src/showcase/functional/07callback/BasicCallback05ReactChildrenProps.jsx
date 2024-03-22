import { useState } from "react"

// useCallback + memo -> good, but we have better solution: props.children
const BasicCallback05ChildrenProps = () => {
    return (
        <>
            <Parent>
                <Child></Child>
                <Child></Child>
                <Child></Child>
            </Parent>
        </>
    )
}

const Parent = (props) => {
    const [state, setState] = useState(0)
    // useCallback
    const handleClick = () => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{state} Click Me</button>
            {props.children}
        </>
    )
}

const Child = (props) => {
    return (
        <>
            <div>Child</div>
        </>
    )
}

export default BasicCallback05ChildrenProps