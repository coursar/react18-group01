import { useId } from "react"

const BasicId02Label = () => {
    const textId = useId()
    const checkboxId = useId()
    
    return (
        <>
            <div>
                <label htmlFor={textId}>Input your name</label>
                <input id={textId} name="name"></input>
            </div>
            <div>
                <label>
                    <input type="checkbox"></input> Click me
                </label>
            </div>
            <div>
                <label htmlFor={checkboxId}>Click me</label>
                <input id={checkboxId} type="checkbox"></input> 
            </div>
        </>
    )
}

export default BasicId02Label