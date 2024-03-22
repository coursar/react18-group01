import { useEffect, useLayoutEffect, useState } from "react"

const BasicEffect06Deps = () => {
    const [id, setId] = useState(1)

    const handleClick = () => {
        setId(prev => prev + 1)
    }

    return (
        <>
            <button onClick={handleClick}>{id} Click me</button>
            <Child id={id}></Child>
        </>
    )
}

const Child = ({id}) => { // const id = props.id
    useEffect(() => {
        const getTodo = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const data = await response.json()
            console.log(data)
        }
        getTodo()
    }, [id])

    return (
        <>
            <div>{id}</div>
        </>
    )
}

export default BasicEffect06Deps