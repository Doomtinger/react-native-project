import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Link} from 'react-router-dom';
import RouterMap from'./Router/RouterMap';//引入路由管理js

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <ul>
              <li><Link to="/app">首页</Link></li>
              <li><Link to="/home">家园</Link></li>
              <li><Link to="/list">列表</Link></li>
              <li><Link to="/lists">列表s</Link></li>
              <li><Link to="/show-list">列表遍历</Link></li>
              <li><Link to="/detail">详情</Link></li>
              <li><Link to="/state">state</Link></li>
              <li><Link to="/event">event</Link></li>
              <li><Link to="/cycle">cycle</Link></li>
              <li><Link to="/communication">communication</Link></li>
              <li><Link to="/controlled">controlled</Link></li>
              <li><Link to="/uncontroll/11">uncontroll</Link></li>
              <li><Link to="/not-found">没得发现</Link></li>
            </ul>
          </header>
          <RouterMap/>
        </Router>
      </div>
    );
  }
}

export default App;
