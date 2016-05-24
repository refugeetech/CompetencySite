import React, { PropTypes, Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './ImageVenn.css'
import Venn from '../Venn/Venn'

export class ImageVenn extends Component {
  render () {
    const {
      available,
      image,
      matched,
      title
    } = this.props

    return (
      <div style={{ backgroundImage: image }} styleName="image-venn">
        <div styleName="content">
          <h1 styleName="title">{title}</h1>
          <Venn available={available} matched={matched} />
        </div>
      </div>
    )
  }
}

export default CSSModules(ImageVenn, styles)
