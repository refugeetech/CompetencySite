import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import About from './components/About/About';
import { Router, Route } from 'react-router';
const createBrowserHistory = require('history/lib/createBrowserHistory');

function redirect (url) {
  window.location = url
}

ReactDOM.render(<Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
    <Route path="register" onEnter={redirect.bind(this, 'http://app.competency.se')} />
    <Route path="about" component={About}/>
  </Router>, document.getElementById('root'));
