import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SignedUp from '../SignedUp/SignedUp'
import Splash from '../Splash/Splash'

export const App = () =>
  <div className="container" styleName="app">
    <Header />
    <div styleName="content">
      <Splash />
      <SignedUp />
    </div>
    <Footer />
  </div>

export default CSSModules(App, styles)
