import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './SignedUp.css'
import Content from '../Content/Content'

export class SignedUp extends Component {
  render () {
    return (
      <Content full narrow>
        <div styleName="title">Registrerade personer:</div>
        <div styleName="signed-wrap">
          <div styleName="signed">387</div>
        </div>
      </Content>
    )
  }
}

export default CSSModules(SignedUp, styles)
