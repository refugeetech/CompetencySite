import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Splash.css'
import Content from '../Content/Content'
import ButtonLink from '../ButtonLink/ButtonLink'
import LanguageStore from '../../stores/languageStore.js'

export const Splash = () =>
  <div className="container">
    <Content
      backgroundImage="url(/static/images/man.jpg)"
      flex="2"
      left>
      <h1 styleName="title">{LanguageStore.define('title')}</h1>
      <p styleName="text">
        {LanguageStore.define('intro')}
      </p>
      <ButtonLink
        href="http://app.competency.se"
        text={LanguageStore.define('buttonTellAboutYourself')} />
    </Content>
  </div>

export default CSSModules(Splash, styles)
