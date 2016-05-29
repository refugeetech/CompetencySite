import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import Splash from '../../components/Splash/Splash'

export const Start = () =>
  <div styleName="content">
    <Splash />
  </div>

export default CSSModules(Start, styles)
