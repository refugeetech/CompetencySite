import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TwoColumn.css';
import Content from '../Content/Content';
import List from '../List/List';
import { Row, Column } from '../Layout/Layout';

@CSSModules(styles)
export default class TwoColumn extends Component {
  render () {
    return (
      <div styleName="two-column">
        <Content backgroundColor="#baccf5" flex="2" right>
          <h1>Are you looking for a job in Sweden?</h1>
          <h2>We are gathering available competencies within asylum seekers in Sweden.</h2>
          <p>Help us by sharing your previous work experience and knowledge. We will share the aggregated statistics to local companies in your area and to the authorities. Our goal is to make the job seeking process as short as possible by matching supply and demand more efficiently.</p>
          <img src="/static/images/iphone.png" styleName="iphone" />
          <iframe src="http://app.competency.se" styleName="app"></iframe>
        </Content>
        <Content
          backgroundImage="url(/static/images/listbg.jpg)"
          flex="1"
          narrow>
          <List
            items={[
              {
                title: 'Competency',
                content: 'Start by sharing your competency right now.'
              },
              {
                title: 'Statistics',
                content: 'All data are gathered and summarized here at competency.se'
              },
              {
                title: 'Matching',
                content: 'Our partners help to match your competency with local companies that might have a internship when they learn about you.'
              },
              {
                title: 'Spread the word',
                content: 'We need a lot of help to get all asylum seekers to register their information here! Spread this url: competency.se'
              },
            ]}/>
        </Content>
      </div>
    );
  }
}
