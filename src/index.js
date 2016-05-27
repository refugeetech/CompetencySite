import React from 'react'
import ReactDOM from 'react-dom'
import {
  applyRouterMiddleware,
  browserHistory,
  Route,
  Router
} from 'react-router'

import useScroll from 'react-router-scroll'
import LanguageActions from './actions/LanguageActions'

import App from './components/App/App'
import About from './components/About/About'
import NotFound from './views/NotFound'

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

    <Route
      component={App}
      onEnter={(nextState) => {
        LanguageActions.setLanguage(nextState.params.language)
      }}
      path="/lang/:language" />

    <Route onEnter={redirect.bind(this, 'http://app.competency.se')} path="register" />
    <Route component={About} path="about" />
    <Route component={NotFound} path="*" />
  </Router>
), document.getElementById('root'))
