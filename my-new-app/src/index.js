import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
// import ExampleComponent from './ExampleComponent';
import Clock from './Clock';
// import Incident from './example/incident';
import * as serviceWorker from './serviceWorker';
import { hashHistory } from 'react-router-dom';
import RouterMap from './Router/RouterMap';

ReactDOM.render( < App / > , document.getElementById('App'));