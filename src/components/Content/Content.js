import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Content.css';
import classNames from 'classnames';

@CSSModules(styles, { allowMultiple: true })
export default class Content extends Component {
  render () {
    const {
      backgroundColor,
      backgroundImage,
      children,
      flex,
      narrow,
      right
    } = this.props;

    const styleNames = classNames('content', {
      right: right,
      narrow: narrow
    });

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImage,
          flex: flex
        }}
        styleName={styleNames}>
        <div styleName="inner">
          {children}
        </div>
      </div>
    );
  }
}
