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
          <h1>Vill du hitta ett jobb i Sverige?</h1>
          <h2>Vi hjälper till att synliggöra jobb och kompetens.</h2>
          <p>Dela dina kontaktuppgifter och din kompetens i vår app. Vi sprider sen informationen till myndigheter och lokala företag som har behov av arbetskraft. Vårt mål är att uppmärksamma myndigheter på kompetens som inte används.</p>
          <img src="/static/images/iphone.png" styleName="iphone" />
        </Content>
        <Content
          backgroundImage="url(/static/images/listbg.jpg)"
          flex="1"
          narrow>
          <List
            items={[
              {
                title: 'Erfarenhet',
                content: 'Du fyller i arbetslivserfarenhet.'
              },
              {
                title: 'Statistik',
                content: 'All data samlas in och redovisas på competency.se'
              }
            ]}/>
        </Content>
      </div>
    );
  }
}
