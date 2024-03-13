import { useRef } from 'react'
import '../../../styles.scss'
import * as bootstrap from 'bootstrap'

/*
HTML:
<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="..." className="rounded me-2" alt="...">
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
*/

/*
JS:
const myToastEl = document.getElementById('myToastEl') => ref
const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)
myToast.show()
*/

const BasicRef12Bootstrap = () => {
    const toastElRef = useRef(null)
    const toastRef = useRef(null)

    const handleClick = () => {
        debugger
        toastRef.current = bootstrap.Toast.getOrCreateInstance(toastElRef.current)
        toastRef.current.show()
    }

    return (
        <>
            <button onClick={handleClick} className='btn btn-primary'>Show</button>
            <div ref={toastElRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..."></img>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </>
    )
}

export default BasicRef12Bootstrap