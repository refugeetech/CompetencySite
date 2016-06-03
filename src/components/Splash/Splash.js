import React from 'react'
import CSSModules from 'react-css-modules'
import marked from 'marked'
import styles from './Splash.css'
import Content from '../Content/Content'
import ButtonLink from '../ButtonLink/ButtonLink'
import LanguageStore from '../../stores/LanguageStore'

export const Splash = () =>
  <div className="container">
    <Content
      backgroundImage="url(/static/images/bg2.jpg)"
      flex="2"
      left>
      <div>
        <img src="/static/images/logo_flush.png" styleName="logo" />
      </div>
      <h1 styleName="title">{LanguageStore.define('title')}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(LanguageStore.define('intro'))
        }}
        styleName="text" />
      <div styleName="buttoncontainer">
        <ButtonLink
          href="http://app.competency.se"
          text={LanguageStore.define('buttonTellAboutYourself')} />
        <ButtonLink
          href="http://bl.ocks.org/cggaurav/raw/12abf0d51111407a1ae7c8a89b1926c4"
          text={LanguageStore.define('buttonEmployee')} />
      </div>
    </Content>
  </div>

export default CSSModules(Splash, styles)
