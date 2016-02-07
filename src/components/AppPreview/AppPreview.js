import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AppPreview.css';

@CSSModules(styles)
export default class AppPreview extends Component {
  render () {
    const isMobile = window.innerWidth <= 800

    if (isMobile) return null

    return (
      <iframe src="http://app.competency.se" styleName="app"></iframe>
    );
  }
}
