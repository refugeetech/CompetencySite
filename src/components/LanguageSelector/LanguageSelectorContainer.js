import React from 'react'
import AltContainer from 'alt-container'
import LanguageStore from '../../stores/LanguageStore'
import LanguageSelector from './LanguageSelector'

const LanguageSelectorContainer = (props) =>
  <AltContainer store={LanguageStore}>
    <LanguageSelector {...props} />
  </AltContainer>

export default LanguageSelectorContainer
