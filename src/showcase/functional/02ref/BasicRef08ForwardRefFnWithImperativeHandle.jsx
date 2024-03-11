// <BasicRef07ForwardRef ref={forwardedRef}>

import { useRef, forwardRef, useImperativeHandle } from "react"

// forwardedRef.current = custom object from imperative handle init
const BasicRef08ForwardedRefFnWithImperativeHandle = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        // if (Math.random() > 0.5) {
        //     inputRef.current.focusName()
        //     return
        // }
        // inputRef.current.focusUsername()
        console.log(inputRef)
    }

    return (
        <>
            <Input ref={inputRef}></Input>
            <button onClick={handleClick}>Click me</button>
        </>
    ) 
}

const Input = forwardRef((props, forwardedRef) => {
    const userRef = useRef(null)
    const usernameRef = useRef(null)

    useImperativeHandle(
        forwardedRef,
        () => ({
            focusName,
            focusUsername
        }), // return {};
        []
    )

    const focusName = () => {
        userRef.current.focus()
    }

    const focusUsername = () => {
        usernameRef.current.focus()
    }

    return (
        <>
            <input ref={userRef} name="name"></input>
            <input ref={usernameRef} name="username"></input>
        </>
    )
})

export default BasicRef08ForwardedRefFnWithImperativeHandle