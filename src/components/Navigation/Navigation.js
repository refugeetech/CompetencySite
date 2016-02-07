import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Navigation.css';
import { Link } from 'react-router'

@CSSModules(styles)
export default class Navigation extends Component {
  render () {
    const links = [
      {
        title: "Registrera dig",
        to: 'register'
      },
      {
        title: 'Om projektet',
        to: 'about'
      }
    ];

    return (
      <ul styleName="navigation">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              activeClassName={styles.active}
              to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
