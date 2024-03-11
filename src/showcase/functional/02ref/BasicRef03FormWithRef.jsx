import { useRef, useState } from "react"

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)
const BasicRef03FormWithRef = () => {
    const inputRef = useRef(null)

    const handleClick = (ev) => {
        ev.preventDefault()
        inputRef.current.focus() // DOM API for Elements
        // bad practice:
        //  document.querySelector(...) -> fast & dirty hack
        //  window.#id
    }

    // inputRef.current.focus() - don't work

    // after render -> inputRef = DOM input
    //  1. variable name
    //  2. fn
    return (
        <>
            <input ref={inputRef} id="search" name="search"></input>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef03FormWithRef