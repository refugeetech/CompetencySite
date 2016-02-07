import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.css';

@CSSModules(styles)
export default class Header extends Component {
  render () {
    return (
      <div styleName="header">
        Competency
      </div>
    );
  }
}
