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
        <Content background="#baccf5" flex="2" right>
          <h1>Personen bakom varje asylsökande</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Content>
        <Content background="url(http://eskipaper.com/images/blurry-1.jpg)" flex="1">
          <List
            items={[
              {
                title: 'Lorem ',
                content: 'ipsum dolor sit amet'
              },
              {
                title: 'Lorem ',
                content: 'ipsum dolor sit amet'
              },
              {
                title: 'Lorem ',
                content: 'ipsum dolor sit amet'
              },
              {
                title: 'Lorem ',
                content: 'ipsum dolor sit amet'
              }
            ]}/>
        </Content>
      </div>
    );
  }
}
