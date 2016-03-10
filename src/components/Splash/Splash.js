import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Splash.css';
import Content from '../Content/Content';
import List from '../List/List';
import ButtonLink from '../ButtonLink/ButtonLink'

@CSSModules(styles)
export default class Splash extends Component {
  render () {
    return (
      <div className="container">
      <Content backgroundImage="url(/static/images/skog.jpg)" flex="2" left>
        <h1>VI HJ&Auml;LPER TILL ATT SYNLIGG&Ouml;RA JOBB OCH KOMPETENS</h1>
        <h2>
          Registrera dig och dela med dig vav dina kompetenser, så att du sedan kan ta del av lediga jobb och bli synlig för arbetsgivare.
        </h2>
        <ButtonLink
          href="http://app.competency.se"
          text="Registrera dig" />
      </Content>
      </div>
    );
  }
}
