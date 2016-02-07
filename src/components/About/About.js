import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';
import Header from '../Header/Header';

@CSSModules(styles)
export default class About extends Component {
  render () {
    return (
      <div>
        <Header />
        <div styleName="content">
          <h1>Gapet - jobb och arbetskraft</h1>

          <h2>Competency bygger på två delar:</h2>

          <p><em>Plattform för asylsökande</em> där de kan registrera sin kompetens och sina kontaktuppgifter. Tjänsten kommer finnas på flera språk.</p>

          <p><em>Plattform för arbetsgivare</em> där de enkelt kan se inom vilka områden kompetens finns samt enkelt komma i kontakt med respektive arbetssökande. Visualisation av hur många jobb som är lediga i Sverige parallellt med hur många asylsökande som har just den kompetens som eftersöks.</p>

           <p>Syftet är att skapa transparens så att myndigheter och arbetsgivare kan se möjligheterna och därmed optimera arbetsmarknaden, sänka kostnader, korta integrationstiden och därmed kunna ta emot människor på ett humanare sätt.</p>
        </div>
      </div>
    );
  }
}
