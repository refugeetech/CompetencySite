import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Treemap from '../../components/Treemap/Treemap'
import QueryStore from '../../stores/QueryStore'

export const TreemapV = () =>
  <div>
    <div styleName="content">
      <Treemap query={QueryStore.currentQuery()}/>
    </div>
  </div>

export default CSSModules(TreemapV, styles)
