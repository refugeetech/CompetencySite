import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Splash.css'
import Content from '../Content/Content'
import ButtonLink from '../ButtonLink/ButtonLink'
import LanguageStore from '../../stores/LanguageStore.js'

export const Splash = () =>
  <div className="container">
    <Content
      backgroundImage="url(/static/images/grid_bg.jpg)"
      flex="2"
      left>
      <div styleName="header">
        <img src="/static/images/logo.png" styleName="logo" />
      </div>
      <h1 styleName="title">{LanguageStore.define('title')}</h1>
      <p styleName="text">
        {LanguageStore.define('intro')}
      </p>
      <div styleName="buttoncontainer">
        <ButtonLink
          href="http://app.competency.se"
          text={LanguageStore.define('buttonTellAboutYourself')} />
        <ButtonLink
          href="http://app.competency.se"
          text={LanguageStore.define('buttonEmployee')} />
      </div>
   

    </Content>
  </div>

export default CSSModules(Splash, styles)
