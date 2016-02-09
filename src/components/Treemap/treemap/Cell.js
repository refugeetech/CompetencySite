import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

export default class Cell extends Component {
  render () {
    var props = this.props;

    var textStyle = {
      'textAnchor': 'middle',
      'fill': props.textColor,
      'fontSize': props.fontSize
    };

    var t = `translate(${props.x},${props.y})`;

    var rectProps = {
      className: 'rd3-treemap-cell',
      width: props.width,
      height: props.height,
      fill: props.fill,
      onMouseOver: props.handleMouseOver,
      onMouseLeave: props.handleMouseLeave
    }

    var textProps = {
      x: props.width / 2,
      y: props.height / 2,
      dy: '.35em',
      style: textStyle,
      className: 'rd3-treemap-cell-text'
    }

    return (
      <g transform={t}>
        <rect {...rectProps}></rect>
        <text {...textProps}>
          {props.label}
        </text>
        <text
          {...textProps}
          className="rd3-treemap-cell-text-light"
          y={props.height / 2 + 20}>
          {props.sublabel}
        </text>
      </g>
    );
  }
}

Cell.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  label: PropTypes.string,
  width: PropTypes.number
};
