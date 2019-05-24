import React, {Component} from 'react'

class ChildrenOne extends Component {
    constructor (props) {
        super(props)
        this.state = {
            childrenOne: 1
        }
    }
    getMsg = () => {
        this.props.sendMsg("我是你儿子")
    }
    render () {
        return(
            <div>
                {this.props.msg}
                <button onClick={this.getMsg}>点我知道说啥</button>
            </div>
        )
    }
}

class ChildrenTwo extends Component {
    render () {
        return (
            <div>
                我的兄弟one说: {this.props.msg}
            </div>
        )
    }
}

class ChildrenThree extends Component {
    componentDidUpdate () {
        console.log('chilrenthree 开始 update')
    }
    render () {
        return <p>child 3，我和兄弟1和兄弟2之间的通信没有任何关系</p>
    }
}
class father extends Component {
    constructor (props) {
        super(props)
        this.state= {
            val: 'hello mySon'
        }
    }
    sendMsg = (msg) => {
        this.setState({
            msg
        })
    }
    render () {
        return (
            <div>
                <ChildrenOne msg={this.state.val} sendMsg={this.sendMsg}></ChildrenOne>
                <div>儿子说: {this.state.msg}</div>
                <ChildrenTwo msg={this.state.msg}></ChildrenTwo>
                <ChildrenThree></ChildrenThree>
            </div>
        )
    }
}
export default father