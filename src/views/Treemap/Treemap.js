import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Treemap from '../../components/Treemap/Treemap'
import QueryStore from '../../stores/QueryStore'

export const TreemapV = () =>
  <div>
    <div styleName="content">
      <iframe
         styleName="graph"
         src="https://kibana.competency.se/app/kibana#/dashboard/Dashboard?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:Gender,panelIndex:1,row:1,size_x:3,size_y:2,type:visualization),(col:4,id:Total-users,panelIndex:3,row:1,size_x:3,size_y:2,type:visualization),(col:7,id:Type-of-jobs,panelIndex:4,row:1,size_x:6,size_y:6,type:visualization),(col:1,id:Weekly-registration-rates,panelIndex:5,row:3,size_x:6,size_y:4,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'*')),title:Dashboard,uiState:())" height="1600" width="800"></iframe>
    </div>
  </div>

export default CSSModules(TreemapV, styles)
//      <Treemap query={QueryStore.currentQuery()}/>
