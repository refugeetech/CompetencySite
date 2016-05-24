import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './ButtonLink.css'

export const ButtonLink = ({ href, text }) =>
  <a
    href={href}
    styleName="button">
    {text}
  </a>

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default CSSModules(ButtonLink, styles)
