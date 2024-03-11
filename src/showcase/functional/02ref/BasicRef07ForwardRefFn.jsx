// <BasicRef07ForwardRef ref={forwardedRef}>

import { useRef, forwardRef } from "react"

// forwardedRef.current = DOM Input
const BasicRef07ForwardedRefFn = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <Input ref={inputRef}></Input>
            <button onClick={handleClick}>Click me</button>
        </>
    ) 
}

const Input = forwardRef((props, forwardedRef) => {
    return (
        <>
            <input ref={forwardedRef} id="search" name="search"></input>
        </>
    )
})

export default BasicRef07ForwardedRefFn