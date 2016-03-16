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
        <Content backgroundImage="url(https://images.unsplash.com/photo-1445346366695-5bf62de05412?crop=entropy&fit=crop&fm=jpg&h=1275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1950)" flex="2" left>
          <h1 styleName="title">Hej!<br />Registrera din kompetens här.</h1>
          <p styleName="text">
            Som nyanländ kan det vara svårt att snabbt synas på arbetsmarknaden och komma i kontakt med arbetsgivare. Genom att dela din nuvarande arbetsstatus och dina kompetenser kan du sedan ta del av lediga jobb och bli synlig för arbetsgivare.
          </p>
          <ButtonLink
            href="http://app.competency.se"
            text="Registrera dig" />
        </Content>
      </div>
    );
  }
}
