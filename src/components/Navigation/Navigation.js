import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Navigation.css';
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import LanguageStore from '../../stores/LanguageStore'

@CSSModules(styles, { allowMultiple: true })
export default class Navigation extends Component {
  render () {
    const links = [
      {
        title: LanguageStore.define('register'),
        to: 'register'
      },
      {
        title: LanguageStore.define('aboutUs'),
        to: 'about'
      }
    ];

    const styleNames = classNames('navigation', {
      right: this.props.right,
      white: this.props.white
    })

    return (
      <ul styleName={styleNames}>
        {links.map((link, i) => {
          if (link.to === '/') {
            return (
              <li key={i}>
                <IndexLink
                  activeClassName={styles.active}
                  to="/">{link.title}</IndexLink>
              </li>
            );
          }

          return (
            <li key={i}>
              <Link
                activeClassName={styles.active}
                to={link.to}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
