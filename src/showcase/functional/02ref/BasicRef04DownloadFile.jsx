import { useRef, useState } from "react"

// hooks -> hooks -> hooks [list]
// mount (first render) -> update (other render)
const BasicRef04DownloadFile = () => {
    const downloadRef = useRef(null)
    // don't do hard calculations

    const handleClick = (ev) => {
        // Code here
        ev.preventDefault()

        // fetched from server
        const data = new Blob([
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
            </svg>`
        ], {type: 'image/svg+xml'})

        const url = window.URL.createObjectURL(data)
        downloadRef.current.href = url
        downloadRef.current.download = "image.svg"
        downloadRef.current.click()
        setTimeout(() => {
            window.URL.revokeObjectURL(url)
        }, 60 * 1000)
    }

    return (
        <>
            <a ref={downloadRef}></a>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicRef04DownloadFile