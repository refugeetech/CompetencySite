import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Select.css'

class Select extends Component {
  render () {
    return (
      <div styleName="select">
        bla
      </div>
    )
  }
}

export default CSSModules(Select, styles)
