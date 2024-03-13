// <BasicRef07ForwardRef ref={forwardedRef}>

import { useRef, forwardRef, Component } from "react"

// forwardedRef.current = DOM Input
const BasicRef09ForwardedRefClassBase = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <Input ref={inputRef}></Input>
            <button onClick={handleClick}>Click me</button>
        </>
    ) 
}

class InputOriginal extends Component {
    constructor(props) {
        super(props)
        // this.props.innerRef => this.innerRef = React.createRef(null)
    }

    render() {
        return (
            <>
                <input ref={this.props.innerRef} id="search" name="search"></input>
            </>
        )
    }
}

const Input = forwardRef((props, forwardedRef) => {
    return <InputOriginal {...props} innerRef={forwardedRef}></InputOriginal>
})



export default BasicRef09ForwardedRefClassBase