import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Navigation.css'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import LanguageStore from '../../stores/LanguageStore'

export const Navigation = ({ right, white }) => {
  const links = [
    {
      title: LanguageStore.define('register'),
      to: 'register'
    },
    {
      title: LanguageStore.define('aboutUs'),
      to: 'about'
    },
    {
      title: LanguageStore.define('treeMap'),
      to: 'visualization'
    }
  ].concat(LanguageStore.getLanguages().map(key => ({
    title: LanguageStore.define(`languageName_${key}`),
    to: `/lang/${key}`
  })))

  const styleNames = classNames('navigation', {
    right: right,
    white: white
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
          )
        }

        return (
          <li key={i}>
            <Link
              activeClassName={styles.active}
              to={link.to}>{link.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

Navigation.propTypes = {
  right: PropTypes.bool,
  white: PropTypes.bool
}

export default CSSModules(Navigation, styles, { allowMultiple: true })
