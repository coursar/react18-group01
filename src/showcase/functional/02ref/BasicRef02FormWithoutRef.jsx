import { useRef, useState } from "react"

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)
const BasicRef02FormWithoutRef = () => {

    const handleSubmit = (ev) => {
        ev.preventDefault()
        // ev.currentTarget.elements.search.focus()
        // Array.from(ev.currentTarget.elements)[0].focus()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="search"></input>
                <button>Click Me</button>
            </form>
        </>
    )
}

export default BasicRef02FormWithoutRef