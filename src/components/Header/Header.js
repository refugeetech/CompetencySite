import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Header.css'
import Navigation from '../Navigation/Navigation'
import { IndexLink } from 'react-router'

export const Header = () =>
  <div styleName="header">
    <IndexLink to="/">
      <img src="/static/images/logo.png" styleName="logo" />
    </IndexLink>
    <Navigation right />
  </div>

export default CSSModules(Header, styles)
