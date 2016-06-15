import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './LanguageSelector.css'
import Select from '../Select/Select'
import LanguageActions from '../../actions/LanguageActions'

export const LanguageSelector = ({ language, languages }) => {
  const currentLanguage = languages[language]
  const options = Object.keys(currentLanguage)
    .filter(def => def.indexOf('languageName') > -1)
    .map(def => {
      return {
        label: currentLanguage[def],
        value: def
      }
    })

  return (
    <Select
      onChange={LanguageActions.setLanguage}
      options={options}
      placeholder="Språk" />
  )
}

LanguageSelector.propTypes = {
  defs: PropTypes.shape({}),
  language: PropTypes.string
}

export default CSSModules(LanguageSelector, styles)
