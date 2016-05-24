import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Content.css'
import classNames from 'classnames'

export const Content = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    children,
    flex,
    full,
    narrow,
    right
  } = props

  const styleNames = classNames('content', {
    right: right,
    narrow: narrow,
    full: full
  })

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        flex: flex
      }}
      styleName={styleNames}>
      <div styleName="inner">
        {children}
      </div>
    </div>
  )
}

Content.propTypes ={
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  flex: PropTypes.string,
  full: PropTypes.bool,
  narrow: PropTypes.bool,
  right: PropTypes.bool
}

export default CSSModules(Content, styles, { allowMultiple: true })
