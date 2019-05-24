import React, {Component} from 'react'

class event extends Component {
    constructor (props) {
        super(props)
        this.state = {isFlag : true}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        this.setState(prevState => ({
            isFlag: !prevState.isFlag
        }))
        console.log(this.state.isFlag)
    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick}>me</button>
            </div>
        )
    }
}
export default event