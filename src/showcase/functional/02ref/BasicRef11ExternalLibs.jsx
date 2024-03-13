import { edit } from "ace-builds"
import { useRef, useState } from "react"

const editorStyles = {width: '500px', height: '400px'}

const initialCode = `
function fn() {
    const x = 10 * 20;
    return x;
}
`

const BasicRef11ExternalLibs = () => {
    const divRef = useRef(null)
    const editorRef = useRef(null)
    const [mode, setMode] = useState('plain')

    const handleEdit = (ev) => {
        ev.preventDefault()
        if (editorRef.current === null) {
            editorRef.current = edit(divRef.current)
            setMode('editor')
        }
    }

    const handleIndent = (ev) => {
        ev.preventDefault()
        // obj.prop.prop.call()
        // obj == null | undefined
        // obj?. -> if (obj !== null) { obj.prop }
        // obj?.prop?.
        // obj?. -> if (obj !== null && obj.prop !== null && obj.prop.pro !== null) ...
        editorRef.current?.indent()
    }

    return (
        <>
            <div ref={divRef} style={editorStyles}>
                {initialCode}
            </div>
            <button onClick={handleEdit}>Edit</button>
            {mode === 'editor' && <button onClick={handleIndent}>Indent</button>}
        </>
    )
}

export default BasicRef11ExternalLibs