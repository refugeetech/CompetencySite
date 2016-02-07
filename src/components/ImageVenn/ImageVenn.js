import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ImageVenn.css';

@CSSModules(styles)
export default class ImageVenn extends Component {
  render () {
    const {
      title
    } = this.props;

    return (
      <div style={{ background: 'url("http://lorempixel.com/1920/1080")' }} styleName="image-venn">
        <div styleName="content">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}
