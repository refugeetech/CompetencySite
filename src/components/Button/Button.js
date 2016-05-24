import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Button.css'

export const Button = ({ text, type }) =>
  <button
    styleName="button"
    type={type}>
    {text}
  </button>

Button.defaultProps = {
  type: 'submit'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default CSSModules(Button, styles)
