import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import ExampleComponent from './ExampleComponent';
// class Example extends Component {
//     render() {
//         return ( 
//             <h1> hahhahahwos</h1>
//         );
//     }
// }
class Example extends Component {
    render() {
      return (
        <div>
          <h1>我是花括号</h1>
          <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
export default Example;