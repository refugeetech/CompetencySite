import React from 'react'
import ReactDOM from 'react-dom'
import {
  applyRouterMiddleware,
  browserHistory,
  IndexRoute,
  Route,
  Router
} from 'react-router'

import useScroll from 'react-router-scroll'
import LanguageActions from './actions/LanguageActions'
import QueryActions from './actions/QueryActions'

import App from './views/App'
import About from './views/About'
import NotFound from './views/NotFound'
import Start from './views/Start'
import Treemap from './views/Treemap'

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
    <Route component={App} path="/">
      <IndexRoute component={Start} />
      <Route component={About} path="/about" />
      <Route
        component={Start}
        onEnter={nextState => {
          LanguageActions.setLanguage(nextState.params.language)
        }}
        path=":language" />
    </Route>
    <Route
      component={Treemap}
      onEnter={nextState => {
        QueryActions.setQuery(nextState.params.query)
      }}
      path="/visualization">
      <Route
      component={Treemap}
      onEnter={nextState => {
        QueryActions.setQuery(nextState.params.query)
      }}
      path="/visualization/:query"/>
    </Route>

    <Route onEnter={redirect.bind(this, 'http://app.competency.se')} path="register" />
    <Route component={NotFound} path="*" />
  </Router>
), document.getElementById('root'))
