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
      <iframe
         styleName="graph"
         src="https://kibana.competency.se/app/kibana#/visualize/edit/Type-of-jobs?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'3',params:(filters:!((input:(query:(query_string:(analyze_wildcard:!t,query:'occupations.code:1'))),label:'Enkla%20jobb'),(input:(query:(query_string:(analyze_wildcard:!t,query:'occupations.code:2**'))),label:'Professionella%20jobb'),(input:(query:(query_string:(analyze_wildcard:!t,query:'occupations.code:5**'))),label:'F%C3%B6rs%C3%A4ljning%20och%20administration'))),schema:bucket,type:filters),(id:'2',params:(filters:!((input:(query:(query_string:(analyze_wildcard:!t,query:'have_lma_card:1%20OR%20have_personal_number:1'))),label:'Har%20LMA-kort%20eller%20personnr'),(input:(query:(query_string:(analyze_wildcard:!t,query:'have_lma_card:0'))),label:'Har%20ej%20LMA-kort'))),schema:bucket,type:filters)),listeners:(),params:(perPage:10,showMeticsAtAllLevels:!f,showPartialRows:!f),title:'Type%20of%20jobs',type:table))" height="600" width="800"></iframe>
     <iframe
         styleName="graph"
         src="https://kibana.competency.se/app/kibana#/visualize/edit/Total-users?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(customLabel:'Registrerade%20anv%C3%A4ndare'),schema:metric,type:count)),listeners:(),params:(fontSize:60,handleNoResults:!t),title:'Total%20users',type:metric))" height="600" width="800"></iframe>

    <iframe
         styleName="graph"
         src="https://kibana.competency.se/app/kibana#/visualize/edit/Gender?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'2',params:(customLabel:K%C3%B6n,field:sex,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,shareYAxis:!t),title:Gender,type:pie))" height="600" width="800"></iframe>

      <iframe
         styleName="graph"
         src="https://kibana.competency.se/app/kibana#/dashboard/Dashboard?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:Gender,panelIndex:1,row:1,size_x:6,size_y:4,type:visualization),(col:7,id:Total-users,panelIndex:3,row:8,size_x:6,size_y:2,type:visualization),(col:7,id:Type-of-jobs,panelIndex:4,row:1,size_x:6,size_y:3,type:visualization),(col:1,id:Weekly-registration-rates,panelIndex:5,row:5,size_x:6,size_y:5,type:visualization),(col:7,id:Competencies,panelIndex:7,row:4,size_x:6,size_y:4,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'*')),title:Dashboard,uiState:())" height="1600" width="800"></iframe>
    </div>}

    <div styleName="content">
      <Markdown2HTML src="/static/markdown/background.md" />
    </div>
  </div>

export default CSSModules(About, styles)
