import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './SignedUp.css'
import Content from '../Content/Content'
import { get } from '../../helpers/api.js'

export class SignedUp extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }
  componentDidMount () {
    var self = this
    get(`http://api.competency.se/users/count`)
      .then(data => {
        self.setState({
          count: data.count
        })
      })
  }
  render () {
    return (
      <Content full narrow>
        <div styleName="title">Registrerade personer:</div>
        <div styleName="signed-wrap">
          <div styleName="signed">{this.state.count}</div>
        </div>
      </Content>
    )
  }
}

export default CSSModules(SignedUp, styles)