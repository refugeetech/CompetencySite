import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './List.css';

@CSSModules(styles)
export default class List extends Component {
  render () {
    return (
      <ul styleName="list">
        {this.props.items.map((item, i) => {
          return (
            <li key={i}>
              <span styleName="title">{item.title}</span>
              {item.content}
            </li>
          );
        })}
      </ul>
    );
  }
}
