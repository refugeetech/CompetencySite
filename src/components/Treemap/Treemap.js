import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Content from '../Content/Content'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis'

export const Splash = () =>
  <div className="container">
    <Content
      flex="2"
      left>
      <XYPlot
        height={300}
        width={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 }
          ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>
    </Content>
  </div>

export default CSSModules(Splash, styles)
