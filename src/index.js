import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import About from './components/About/About';
import { Router, Route } from 'react-router';
const createBrowserHistory = require('history/lib/createBrowserHistory');

ReactDOM.render(<Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
    <Route path="register" component={About}/>
    <Route path="about" component={About}/>
  </Router>, document.getElementById('root'));
