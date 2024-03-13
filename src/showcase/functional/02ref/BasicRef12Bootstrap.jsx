import '../../../styles.scss'
import * as bootstrap from 'bootstrap'

/*
HTML:
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
*/

/*
JS:
const myToastEl = document.getElementById('myToastEl') => ref
const myToast = bootstrap.Toast.getInstance(myToastEl)
myToast.show()
*/

const BasicRef12Bootstrap = () => {
    return (
        <>
            <div>hello</div>
        </>
    )
}

export default BasicRef12Bootstrap