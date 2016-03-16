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
        <Content backgroundImage="url(https://farm4.staticflickr.com/3045/3251209204_26d57b3bbb_o_d.jpg)" flex="2" left>
          <h1 styleName="title">Låt jobben hitta dig istället</h1>
          <p styleName="text">
            Som nyanländ kan det vara svårt att snabbt synas på arbetsmarknaden. Genom att dela din nuvarande arbetsstatus och dina kompetenser 
            även innan du har ett personnummer kan potentiella arbetsgivare få koll på att du finns och erbjuda praktikplatser.
          </p>
          <ButtonLink
            href="http://app.competency.se"
            text="Berätta om dig" />
        </Content>
      </div>
    );
  }
}
