import { useId, useState } from 'react'

const Basic06IdConditionalDiv = () => {
    const [state, setState] = useState(0)

    const handleClick = (ev) => {
        setState(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            {/* use css-hiding */}
            {state % 2 === 0 && <Child id={state}></Child>}
        </>
    )

}

export default Basic06IdConditionalDiv

const Child = (props) => {
    const dataId = useId()

    // calculation -> filter/map

    return (<>
        <div id={props.id} data-id={dataId}>Same div</div>
    </>)
}