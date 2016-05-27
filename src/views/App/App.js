import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LanguageStore from '../../stores/LanguageStore'

export const App = ({ children }) =>
  <div className={['container', `language-${LanguageStore.currentLanguage()}`].join(' ')} styleName="app">
    <Header />
    {children}
    <Footer />
  </div>

App.propTypes = {
  children: PropTypes.node
}

export default CSSModules(App, styles)
