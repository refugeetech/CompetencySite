import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AppPreview.css';
import isPhone from '../../helpers/isPhone'

@CSSModules(styles)
export default class AppPreview extends Component {
  render () {
    if (isPhone()) { return null }

    return (
      <iframe src="http://app.competency.se" styleName="app"></iframe>
    );
  }
}
