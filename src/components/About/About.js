import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';
import Header from '../Header/Header';
import isPhone from '../../helpers/isPhone'

@CSSModules(styles)
export default class About extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <div styleName="content">
          <h1>Our goal</h1>

          <h2>We want to speed up the integration process for all refugees by visualizing the talent</h2>

          <p><em>Platform for asylum seekers</em> where they can register their competency and their contact information. The service will be available in multiple languages. </p>

          <p><em>Platform for employers</em> where they very easily can see what available competency there is available in their area. There will also be an easy way of contacting multiple people with job offerings and internships. The visualizations will show the general public and authorities how diverse the group of asylum seekers really are and hopefully more will understand that we shouldn't only talk about the cost of integration but also what opportunities that are open for those who start seeing this potential.</p>

           <p>By shortening the time from arrival to getting a job is a hugely beneficial task for us. Every day we can save have tripple effect in cost savings, tax income, social and humanitarian perspectives. Our government organisations are struggling to keep up and have difficulties to coordinate an effective process so we want to help by creating a new way to short-circuit the whole process by exposing everyone interested in an internship or job as soon as they have a LMA-card (temporary working permit).</p>
        </div>
        {!isPhone() && <div styleName="content">
          <h1>Live statistics</h1>
          <iframe styleName="graph" src="http://kibana.competency.se/app/kibana#/visualize/edit/Number-of-replies?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'2',params:(customInterval:'2h',extended_bounds:(),field:timestampCreated,interval:auto,min_doc_count:1),schema:segment,type:date_histogram),(id:'3',params:(field:languages.English),schema:metric,type:avg)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,drawLinesBetweenPoints:!t,interpolate:linear,radiusRatio:9,scale:linear,setYExtents:!f,shareYAxis:!t,showCircles:!t,smoothLines:!f,times:!(),yAxis:()),title:'Number%20of%20replies',type:line))" height="600" width="800"></iframe>
          <iframe styleName="graph" src="http://kibana.competency.nu/app/kibana#/visualize/create?embed=true&type=histogram&indexPattern=user&_g=(refreshInterval:(display:'1%20minute',pause:!f,section:2,value:60000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'*')),uiState:(),vis:(aggs:!((id:'1',params:(),schema:metric,type:count),(id:'2',params:(field:birthYear,order:asc,orderBy:_term,size:50),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,mode:grouped,scale:linear,setYExtents:!f,shareYAxis:!t,times:!(),yAxis:()),title:'New%20Visualization',type:histogram))" height="600" width="800"></iframe>
        </div>}

        <div styleName="content">
          <h1>Background</h1>
          <p><em>Disclaimer</em> This project is the result of a process led by Refugee Tech and initially created on a weekend
          Kodapor X Hackathon in February 2016. The team consists mainly of developers with no or little knowledge of the migration process in detail, therefore there might be a lot of things we miss - have misunderstood or underestimated. We have the ambition to make the project sustainable by itself in the future and for both reasons we need all the help we can get to get the project as accurate and successfull as possible. Please contact us if you have any input or feedback. </p>

          <h2>The team</h2>
          <p>Christian Landgren, CEO, Iteam</p>
          <p>Alexander Czigler, Developer, Iteam</p>
          <p>Nilla Juvas, Designer, Freelancer</p>
          <p>Amir Rahnama, Developer, Iteam</p>
          <p>Radu Achim, Developer, Iteam</p>
          <p>Daniel Eriksson, Developer, Bukowskis</p>
          <p>Karin Werner, Digital Manager, Taxi Stockholm</p>
          <p>Rickard Laurin, Developer, Iteam</p>
        </div>
      </div>
    );
  }
}
