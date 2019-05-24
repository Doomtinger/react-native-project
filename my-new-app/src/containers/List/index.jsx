import React from 'react'
 
// let son = React.createElement('div', {className: 'color-red'}, '我是儿子')
// let father = React.createElement('div', {className: 'color-red'}, '我是爸爸', son)

const props = {
    name: 'jack',
    age: 18
}

class List extends React.Component {
    render() {
        return (
            <div>hello, {this.props.name}</div>
        )
    }
}
 
class App extends React.Component {
    render () {
        return (
            <div>
                <List name="neil" age="25"/>
                <List {...props}/>
                <List/>
            </div>
        )
    }
}
export default App;