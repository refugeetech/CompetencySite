import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Content.css';
import classNames from 'classnames';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  render () {
    const {
      background,
      children,
      flex,
      right
    } = this.props;

    const styleNames = classNames('content', {
      right: right
    });

    return (
      <div
        style={{
          background: background,
          flex: flex
        }}
        styleName={styleNames}>
        {children}
      </div>
    );
  }
}
