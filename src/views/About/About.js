import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './About.css'
import isPhone from '../../helpers/isPhone'
import Markdown2HTML from 'react-markdown-to-html'

export const About = () =>
  <div>
    <div styleName="content">
      <Markdown2HTML src="/static/markdown/about.md" />
    </div>
    {!isPhone() && <div styleName="content">
      <h1>Live statistics</h1>
      <iframe src="http://kibana.competency.se/app/kibana#/visualize/edit/Number-of-replies?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'2',params:(field:occupations.name,order:desc,orderBy:'1',size:16),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,shareYAxis:!t),title:Number-of-replies,type:pie))" height="600" width="800" styleName="graph"></iframe>
      <iframe
          height="600"
         src="http://kibana.competency.nu/app/kibana#/visualize/create?embed=true&type=histogram&indexPattern=user&_g=(refreshInterval:(display:'1%20minute',pause:!f,section:2,value:60000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'2',params:(field:birthYear,order:asc,orderBy:_term,size:50),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,mode:grouped,scale:linear,setYExtents:!f,shareYAxis:!t,times:!(),yAxis:()),title:'New%20Visualization',type:histogram))"
         styleName="graph"
         width="800"></iframe>
    </div>}

    <div styleName="content">
      <Markdown2HTML src="/static/markdown/background.md" />
    </div>
  </div>

export default CSSModules(About, styles)
