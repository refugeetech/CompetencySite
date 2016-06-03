import React, { PropTypes } from 'react'
import styles from './Layout.css'
import classNames from 'classnames'

export const Row = ({ children, className }) => {
  const classes = classNames('row', styles.row, className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Row
