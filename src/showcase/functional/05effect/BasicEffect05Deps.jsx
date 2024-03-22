import { useEffect, useLayoutEffect, useState } from "react"

const BasicEffect05Deps = () => {
    const [id, setId] = useState(1)

    useEffect(() => {
        const getTodo = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const data = await response.json()
            console.log(data)
        }
        getTodo()
    }, [id])

    const handleClick = () => {
        setId(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{id} Click me</button>
        </>
    )
}

export default BasicEffect05Deps