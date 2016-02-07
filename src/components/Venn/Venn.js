import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Venn.css';

@CSSModules(styles)
export default class Venn extends Component {
  render () {
    const {
      available,
      matched
    } = this.props;

    return (
      <div styleName="venn">
        <div styleName="available">{available}</div>
        <div styleName="matched">{matched}</div>
        <div styleName="available-title">LEDIGA JOBB</div>
        <div styleName="matched-title">MATCHANDE ASYLSÖKANDE</div>
      </div>
    );
  }
}
