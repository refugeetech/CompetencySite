import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import SplashContainer from '../../components/Splash/SplashContainer'

export const Start = () =>
  <div styleName="content">
    <SplashContainer />
  </div>

export default CSSModules(Start, styles)
