import React, {Component} from 'react'

class test extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: 0
        }
        this.setNumber = this.setNumber.bind(this)
    }
    setNumber () {
        this.setState({
            data: this.state.data + 1
        })
    }
    render (){
        return (
            <div>
                <button onClick={()=> this.setNumber()}>{this.state.data}</button>
                {
                    this.state.data !== 3 ?
                    <Content myNumber={this.state.data}></Content> : <div>组件被销毁</div>
                }
            </div>
        )
    }
}
class Content extends Component {
    componentWillMount() {
    console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
    console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
    return true;
    }

    componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
    }

    render() {
    return (
        <div>
            <h3>{this.props.myNumber}我是number</h3>
        </div>
    );
    }
}
export default test