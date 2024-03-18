import { useEffect, useLayoutEffect, useRef, useState } from "react"

const work = (duration) => {
    const start = new Date().getTime()
    const end = start + duration
    let current = start
    while(current < end) {
        current = new Date().getTime()
    }
}

const BasicEffect02EffectVSLayout = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    // useLayoutEffect(() => {
    //     work(2000)
    // })

    useLayoutEffect(() => {
        work(2000)
        if (height === 0) {
            setHeight(100)
        }
        if (height === 100) {
            setHeight(200)
        }
        if (height === 200) {
            setHeight(300)
        }
    }, [height])

    const style = {
        height,
        backgroundColor: 'green',
    }

    return (
        <>
            <div style={style}>sample</div>
        </>
    )
}

export default BasicEffect02EffectVSLayout