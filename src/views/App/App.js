import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SignedUp from '../../components/SignedUp/SignedUp'
import Splash from '../../components/Splash/Splash'
import LanguageStore from '../../stores/LanguageStore'

export const App = () =>
  <div className={['container', `language-${LanguageStore.currentLanguage()}`].join(' ')} styleName="app">
    <Header />
    <div styleName="content">
      <Splash />
      <SignedUp />
    </div>
    <Footer />
  </div>

export default CSSModules(App, styles)
