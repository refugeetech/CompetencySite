import React from 'react'
import AltContainer from 'alt-container'
import LanguageStore from '../../stores/LanguageStore'
import App from './App'

const AppContainer = (props) =>
  <AltContainer store={LanguageStore}>
    <App {...props} />
  </AltContainer>

export default AppContainer
