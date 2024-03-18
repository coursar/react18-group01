import { useState } from 'react'

const Basic05IdSameDiv = () => {
    const [state, setState] = useState(0)

    const handleClick = (ev) => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <Child id={state}></Child>
        </>
    )

}

export default Basic05IdSameDiv

const Child = (props) => {
    return (<>
        <div id={props.id}>Same div</div>
    </>)
}