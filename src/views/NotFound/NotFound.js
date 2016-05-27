import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './NotFound.css'
import { IndexLink } from 'react-router'

export const NotFound = () =>
  <div styleName="four-o-four">
    <img src="/static/images/logo.png" styleName="logo" />
    The page you requested could not be found.
    <IndexLink className={styles.link} to="/">
      Return to the startpage
    </IndexLink>
  </div>

export default CSSModules(NotFound, styles)
