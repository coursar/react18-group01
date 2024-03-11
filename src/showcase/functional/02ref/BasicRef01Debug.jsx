import { useRef, useState } from "react"

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)
const BasicRef01Debug = () => {
    debugger
    const ref = useRef(100) // {current: 100}

    const handleClick = () => {
        ref.current++ // no re-render
        console.log(ref)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef01Debug
