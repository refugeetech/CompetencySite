import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Message.css';

@CSSModules(styles)
export default class Message extends Component {
  render () {
    const {
      message
    } = this.props;

    return (
      <div styleName="message">
        <div styleName="inner">
          {message}
        </div>
      </div>
    );
  }
}
