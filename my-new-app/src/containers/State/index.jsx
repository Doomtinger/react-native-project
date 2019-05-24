import React from 'react'

// const props = {
//     name: 'jack',
//     age: 18
// }
// class Hello extends React.Component {
//     constructor (props){
//         super(props)
//         this.state = {
//             country: 'china',
//             val: 'hello neil'
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick () {
//         this.setState({
//             val: 'hello, world'
//         })
//         console.log(this.state.val)
//     }
//     render () {
//         return (
//             <div>
//                 <p>Hello, {this.props.name}</p>
//                 <p>{this.state.country}</p>
//                 <button onClick={() => this.handleClick}>{this.state.val}</button>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     render () {
//         return (
//             <Hello name="neil"/>
//         )
//     }
// }
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        val: 'hello neil'
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        val: 'hello world'
      })
      // this.setState()是异步的，所以这里的console.log打印出来并不是想要的
      console.log(this.state.val);
      console.log('111')
    }
    render() {
      return (
        <button onClick={() => this.handleClick()}>{this.state.val}</button>
      )
    }
}
export default App