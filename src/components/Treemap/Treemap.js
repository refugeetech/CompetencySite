import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Content from '../Content/Content'
import { Treemap } from 'react-vis'

export const Splash = () =>
  <div className="container" styleName="container">
    <Content
      flex="2"
      left>
      <Treemap
        data={{
          title: '',
          children: [
            {
              title: 'China',
              size: 1357
            },
            {
              title: 'India',
              size: 1252
            },
            {
              title: 'USA',
              size: 321
            },
            {
              title: 'Indonesia',
              size: 249.9
            },
            {
              title: 'Brasil',
              size: 200.4
            },
            {
              title: 'Pakistan',
              size: 192
            },
            {
              title: 'Nigeria',
              size: 173.6
            }
          ]
        }}
        height={300}
        width={500}/>
    </Content>
  </div>

export default CSSModules(Splash, styles)
