import React from 'react'
import AltContainer from 'alt-container'
import LanguageStore from '../../stores/LanguageStore'
import Splash from './Splash'

const SplashContainer = (props) =>
  <AltContainer store={LanguageStore}>
    <Splash {...props} />
  </AltContainer>

export default SplashContainer
