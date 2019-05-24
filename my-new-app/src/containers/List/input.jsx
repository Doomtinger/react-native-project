import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        }
    }
    getInputVal = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    transferVal = (e) => {
        let val = this.state.inputVal
        if (e.keyCode === 13 && val.trim()) {
            this.props.onSubmitFn(val)
            this.setState({
                inputVal: ''
            })
        }
    }
    render () {
        return (
            <input type="text"
            value={this.state.inputVal}
            onChange={this.getInputVal}
            onKeyUp={this.transferVal}></input>
        )
    }
}
export default Input