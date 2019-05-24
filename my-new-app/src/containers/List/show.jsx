import React, {Component} from 'react'

export default class List extends Component {
    delTodo = (id) => {
      this.props.onDelFn(id)
    }
    render() {
      return (
        <li>
          {this.props.text}
          <span style={{ color: 'red', marginLeft: '40px' }} onClick={() => this.delTodo(this.props.id)}>X</span>
        </li>
      )
    }
  }