import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Splash.css';
import Content from '../Content/Content';
import List from '../List/List';
import ButtonLink from '../ButtonLink/ButtonLink'
import LanguageStore from '../../stores/LanguageStore'

@CSSModules(styles)
export default class Splash extends Component {
  render () {
    return (
      <div className="container">
        <Content backgroundImage="url(/static/images/man.jpg)" flex="2" left>
          <h1 styleName="title">{LanguageStore.define('title')}</h1>
          <p styleName="text">
            {LanguageStore.define('intro')}
          </p>
          <ButtonLink
            href="http://app.competency.se"
            text={LanguageStore.define('buttonTellAboutYourself')} />
        </Content>
      </div>
    );
  }
}
