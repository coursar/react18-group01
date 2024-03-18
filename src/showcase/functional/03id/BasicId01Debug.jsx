import { useId, useState } from "react"

const BasicId01Debug = () => {
    const [state, setState] = useState(0)
    const id = useId()
    
    const handleClick = () => {
        setState(prev => prev+ 1)
    }

    return (
        <>
            <button onClick={handleClick}>click</button>
            <div id={id}>some content</div>
        </>
    )
}

export default BasicId01Debug