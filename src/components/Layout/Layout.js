import React, { Component, PropTypes } from 'react';
import styles from './Layout.css';
import classNames from 'classnames';

const displayName = 'Row';

export class Row extends Component {
  render () {
    var classes = classNames('row', styles.row, this.props.className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Row.displayName = displayName;

export class Column extends Component {
  render () {
    var classes = classNames({
      [`col-xs-${this.props.xs}`]: this.props.xs,
      [`col-sm-${this.props.sm}`]: this.props.sm,
      [`col-md-${this.props.md}`]: this.props.md,
      [`col-lg-${this.props.lg}`]: this.props.lg,
      [`col-xlg-${this.props.xlg}`]: this.props.xlg,
      [`col-xs-offset-${this.props.xsOffset}`]: this.props.xsOffset,
      [`col-sm-offset-${this.props.smOffset}`]: this.props.smOffset,
      [`col-md-offset-${this.props.mdOffset}`]: this.props.mdOffset,
      [`col-lg-offset-${this.props.lgOffset}`]: this.props.lgOffset,
      [`col-xlg-offset-${this.props.xlgOffset}`]: this.props.xlgOffset
    }, this.props.className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
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
};

Column.defaultProps = {
  sm: '12',
  xs: '12'
};
