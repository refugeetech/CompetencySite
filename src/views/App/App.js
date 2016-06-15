import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import Header from '../../components/Header/Header'

export const App = ({ children, language }) =>
  <div className={['container', `language-${language}`].join(' ')} styleName="app">
    <Header />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node
}

export default CSSModules(App, styles)
