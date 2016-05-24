import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './SignedUp.css'
import Content from '../Content/Content'
import { get } from '../../helpers/api.js'
import LanguageStore from '../../stores/languageStore.js'

export class SignedUp extends Component {
  constructor () {
    super(...arguments)

    this.state = { count: 0 }

    this._setState = this._setState.bind(this)
  }

  componentDidMount () {
    get('http://api.competency.se/users/count')
      .then(data => this._setState(data))
  }

  _setState (data) {
    this.setState({
      count: data.count
    })
  }

  render () {
    return (
      <Content full narrow>
        <div styleName="title">{LanguageStore.define('registeredPeople')}</div>
        <div styleName="signed-wrap">
          <div styleName="signed">{this.state.count}</div>
        </div>
      </Content>
    )
  }
}

export default CSSModules(SignedUp, styles)
