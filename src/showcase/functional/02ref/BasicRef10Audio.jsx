import { useRef, useState } from "react"

class FakeAudio {
    constructor() {
        console.log('fake audio created')
    }

    play() {
        console.log('play')
    }
}

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)

// v3: single instance from multiple component
// const audio = new FakeAudio()

// new Audio -> used only once in mount
// re-render -> new Audio, value not used by React
const BasicRef10Audio = () => {
    const audioRef = useRef(null)
    // v1.
    if (audioRef.current === null) {
        audioRef.current = new Audio('/tg_msg_incoming.mp3')
    }

    const [count, setCount] = useState(0)

    const handleClick = (ev) => {
        ev.preventDefault()
        // v2. lazy
        // if (audioRef.current === null) {
        //     audioRef.current = new Audio('/tg_msg_incoming.mp3')
        // }
        audioRef.current.play() 
        setCount(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef10Audio