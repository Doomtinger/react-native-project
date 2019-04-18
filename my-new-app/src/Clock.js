import React, { Component } from 'react';
// var props = {};
// props.foo = '1';
// props.bar = '2';
// var component = <Component {...props} />;
// console.log(component)
class Clock extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( 
            <div>
                <h1> Hello, world! </h1> <h2> 现在是 { this.state.date.toLocaleTimeString() }. </h2>
            </div>
        );
    }
}
export default Clock;