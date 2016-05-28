import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Start.css'
import SignedUp from '../../components/SignedUp/SignedUp'
import Splash from '../../components/Splash/Splash'
import Treemap from '../../components/Treemap/Treemap'

export const Start = () =>
  <div styleName="content">
    <Splash />
    <SignedUp />
    <Treemap />
  </div>

export default CSSModules(Start, styles)
