import React from 'react'
 
const myStyle = {
    fontSize: '12px',
    color: 'red'
}
class App extends React.Component {
    render() {
        return (
            <p style={myStyle}>我是app组件</p>
        )
    }
}
 
export default App;