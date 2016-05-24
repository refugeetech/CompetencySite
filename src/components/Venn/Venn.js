import React, { PropTypes, Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Venn.css'

export class Venn extends Component {
  render () {
    const {
      available,
      matched
    } = this.props

    return (
      <div styleName="venn-wrap">
        <div styleName="available-title">AVAILABLE JOBS</div>
        <div styleName="venn">
          <div styleName="available">{available}</div>
          <div styleName="matched">{matched}</div>
        </div>
        <div styleName="matched-title">MATCHING ASYLUM SEEKERS</div>
      </div>
    )
  }
}

export default CSSModules(Venn, styles)
