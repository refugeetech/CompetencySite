import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Footer.css'
import Navigation from '../Navigation/Navigation';
import { IndexLink } from 'react-router';

export class Footer extends Component {
  render () {
    return (
      <div styleName="footer">
        <IndexLink to="/">
          <img src="/static/images/logo.png" styleName="logo" />
        </IndexLink>
        <Navigation white />
      </div>
    )
  }
}

export default CSSModules(Footer, styles)
