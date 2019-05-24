import React from 'react'
 
const myStyle = {
    fontSize: 20,
    color: 'red'
}
class Detail extends React.Component {
    render() {
        return (
            <p style={myStyle}>我是details组件</p>
        )
    }
}
 
export default Detail;