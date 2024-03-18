import { useId } from "react"

const BasicId03Form = () => {
    const formId = useId()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        debugger
    }
    
    return (
        <>
            <form id={formId} onSubmit={handleSubmit}>
                <input type="text" name="login" />
            </form>
            <button form={formId}>Send me</button>
        </>
    )
}

export default BasicId03Form