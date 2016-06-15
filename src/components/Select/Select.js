import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Select.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Select extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      value: null
    }

    this._hide = this._hide.bind(this)
    this._toggle = this._toggle.bind(this)
    this._label = this._label.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._handleClick = this._handleClick.bind(this)
  }

  _label () {
    return this.props.label
  }

  _hide () {
    this.setState({
      expanded: false
    })
  }

  _handleChange (value, label) {
    this.props.onChange(value, label)
    this._hide()
    this.setState({
      value: label
    })
  }

  _handleClick () {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  _toggle () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  _renderList () {
    if (this.state.expanded) {
      return (
        <ul key="list" styleName="list">
          {this.props.options.map((option, i) => (
            <li
              key={`select-${this.props.name}-${i}`}
              onClick={this._handleChange.bind(this, option.value, option.label)}
              styleName={option.label === this.props.value && 'active'}
              value={option.value}>
              {option.label}
            </li>
          ))}
        </ul>
      )
    }

    return null
  }

  render () {
    return (
      <div className={this.props.className} styleName={this.props.extraStyles}>
        {this.state.expanded ? <div onClick={this._hide} styleName="overlay" /> : null}
        {this.props.label ? <label htmlFor={this.props.name} styleName="label">
          {this._label()}
        </label> : null}
        <div
          className={this.props.className}
          onTouchTap={this._handleClick}
          styleName="wrap">
          <div
            onTouchTap={this._toggle}
            styleName="select">
            <div styleName="choose">{this.state.value || this.props.placeholder}</div>
            <i className="fa fa-chevron-down" />
          </div>
          <ReactCSSTransitionGroup
             transitionEnterTimeout={100}
             transitionLeaveTimeout={100}
             transitionName="fadeIn">
            {this._renderList()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

Select.propTypes = {
  className: PropTypes.string,
  clearable: PropTypes.bool,
  extraStyles: PropTypes.string,
  getErrorMessage: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipId: PropTypes.string,
  value: PropTypes.string
}

export default CSSModules(Select, styles, { allowMultiple: true })
