import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ButtonLink.css';

@CSSModules(styles)
export default class ButtonLink extends Component {
  render () {
    const {
      href,
      text
    } = this.props

    return (
      <a
        href={href}
        styleName="button">
        {text}
      </a>
    );
  }
}

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}
