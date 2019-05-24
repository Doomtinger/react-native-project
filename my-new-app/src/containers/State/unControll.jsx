import React, {Component} from 'react'

class NameForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputVal: 'hello!'
        }
        this.changeVal = this.changeVal.bind(this)
    }
    changeVal (event) {
        alert("A name was submitted:" + this.input.value)
        event.prevetDefault()
    }
    render() {
        return (
            <form onSubmit={this.changVal}>
                <label>
                    Name: 
                    {this.props.match.params.id}
                    <input type="text" ref={(input) => this.input = input}></input>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;