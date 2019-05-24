import React, {Component} from 'react'

class App extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            inputVal: 'hello!'
        }
        this.changeVal = this.changeVal.bind(this)
    }
    changeVal (event) {
        this.setState({
            inputVal: event.target.value
        })
    }
    render() {
        return (
        <div>
            {/* 这个value值无法改变，要想改变，只能通过onChange事件 */}
            <input type="text" value={this.state.inputVal} onChange={this.changeVal}/>
        </div>
        );
    }
}

export default App;