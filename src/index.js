import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import About from './components/About/About'
import {
  applyRouterMiddleware,
  browserHistory,
  Route,
  Router
} from 'react-router'

import useScroll from 'react-router-scroll'

function redirect (url) {
  window.location = url
}

// Import tap events
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}>
    <Route component={App} path="/" />
    <Route onEnter={redirect.bind(this, 'http://app.competency.se')} path="register" />
    <Route component={About} path="about" />
  </Router>
), document.getElementById('root'))
