import { useEffect, useRef, useState } from 'react'

// input type=text
// change -> blur
// input -> always

const forbiddenNames = [
    'admin', 'root'
]

// Change
const BasicRef13FormValidation = () => {
    const [loginValue, setLoginValue] = useState('')
    const handleSubmit = (ev) => {
        ev.preventDefault()

        const valid = ev.currentTarget.checkValidity()
        if (!valid) {
            // elements
            const inputs = Array.from(ev.currentTarget.elements).filter(el => el.name != '')
            for (const input of inputs) {
                if (!input.validity.valid) {
                    // TODO: show messages...
                }
            }

            for (const input of inputs) {
                if (!input.validity.valid) {
                    input.focus()
                    break
                }
            }
        }
    }

    // useEffect | useLayoutEffect

    const handleLoginChange = (ev) => {
        // <Input>
        // state valid/invalid
        // TODO: validate: 'admin'
        const {value} = ev.currentTarget
        // TODO: clean value: trim(), replace, toLowerCase
        if (forbiddenNames.includes(value)) {
            ev.currentTarget.setCustomValidity('Запрещённое значение')
        } else {
            ev.currentTarget.setCustomValidity('')
        }

        setLoginValue(ev.currentTarget.value)
    }

    return (
        <>
            <form className='' onSubmit={handleSubmit} noValidate>
                <input name='name' required></input>
                <input name='login' required value={loginValue} onChange={handleLoginChange}></input>
                <button>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </>
    )
}

export default BasicRef13FormValidation