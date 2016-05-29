import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Treemap from '../../components/Treemap/Treemap'

export const TreemapV = () =>
  <div>
    <div styleName="content">
      <Treemap />
    </div>
  </div>

export default CSSModules(TreemapV, styles)
