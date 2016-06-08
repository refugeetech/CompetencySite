import React, { PropTypes } from 'react'
import classNames from 'classnames'

export const Column = (props) => {
  const classes = classNames({
    [`col-xs-${props.xs}`]: props.xs,
    [`col-sm-${props.sm}`]: props.sm,
    [`col-md-${props.md}`]: props.md,
    [`col-lg-${props.lg}`]: props.lg,
    [`col-xlg-${props.xlg}`]: props.xlg,
    [`col-xs-offset-${props.xsOffset}`]: props.xsOffset,
    [`col-sm-offset-${props.smOffset}`]: props.smOffset,
    [`col-md-offset-${props.mdOffset}`]: props.mdOffset,
    [`col-lg-offset-${props.lgOffset}`]: props.lgOffset,
    [`col-xlg-offset-${props.xlgOffset}`]: props.xlgOffset
  }, props.className)

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lgOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  mdOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  smOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  xlg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  xlgOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  xs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  xsOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Column.defaultProps = {
  sm: '12',
  xs: '12'
}

export default Column
