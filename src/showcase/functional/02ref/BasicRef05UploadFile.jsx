import { useRef, useState } from "react"

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)
const BasicRef05UploadFile = () => {
    const uploadRef = useRef(null)
    const [content, setContent] = useState('')
    // don't do hard calculations

    const handleClick = (ev) => {
        // Code here
        ev.preventDefault()
        uploadRef.current.click()
    }

    const handleChange = async (ev) => {
        console.log(ev)
        console.log(ev.currentTarget.value)
        // ev.currentTarget.files -> FileList [File -> Blob]
        const text = await ev.currentTarget.files[0].text()
        setContent(text)

        // TODO: do some action -> upload
        uploadRef.current.value = ''
    }

    return (
        <>
            <textarea value={content}></textarea>
            <input onChange={handleChange} ref={uploadRef} type="file"></input>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef05UploadFile