import React, { Component } from "react";

class BasicRef06ClassbaseComponent extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        this.secret = 'top secret'
    }

    handleClick = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <input ref={this.inputRef} id="search" name="search"></input>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default BasicRef06ClassbaseComponent