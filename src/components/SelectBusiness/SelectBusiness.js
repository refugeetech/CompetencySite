import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './SelectBusiness.css'
import Select from '../Select/Select'

export class SelectBusiness extends Component {
  render () {
    return (
      <div styleName="select-business">
        <div styleName="inner">
          <Select />
        </div>
      </div>
    )
  }
}

export default CSSModules(SelectBusiness, styles)
