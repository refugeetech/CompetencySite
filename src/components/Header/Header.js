import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.css';
import Navigation from '../Navigation/Navigation';
import { IndexLink } from 'react-router';

@CSSModules(styles)
export default class Header extends Component {
  render () {
    return (
      <div styleName="header">
        <IndexLink to="/">
          <img src="/static/images/logo.png" styleName="logo" />
        </IndexLink>
      </div>
    );
  }
}
