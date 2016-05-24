import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './AppPreview.css'
import isPhone from '../../helpers/isPhone'

export const AppPreview = () => {
  if (isPhone()) { return null }

  return (
    <iframe src="http://app.competency.se" styleName="app"></iframe>
  )
}

export default CSSModules(AppPreview, styles)
