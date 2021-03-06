import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './List.css'

export const List = ({ items }) =>
  <ul styleName="list">
    {items.map((item, i) => (
      <li key={i}>
        <span styleName="title">{item.title}</span>
        {item.content}
      </li>
    ))}
  </ul>

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CSSModules(List, styles)
