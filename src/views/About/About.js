import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './About.css'
import isPhone from '../../helpers/isPhone'
import Markdown2HTML from 'react-markdown-to-html'

export const About = () =>
  <div>
    <div styleName="content">
      <Markdown2HTML src="/static/markdown/about.md" />
    </div>
    <div styleName="content">
      <Markdown2HTML src="/static/markdown/background.md" />
    </div>
  </div>

export default CSSModules(About, styles)
