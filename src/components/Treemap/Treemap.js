import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Treemap.css'
import Content from '../Content/Content'
import { get } from '../../helpers/api.js'
import { Treemap } from 'react-vis'

export class ReactTreemap extends Component {
  constructor () {
    super(...arguments)

    this.state = { data: {} }

    this._setState = this._setState.bind(this)
  }

  componentDidMount () {
    get(`http://api.competency.se/visualization?q=${this.props.query}`)
      .then((data) => this._setState(data))
  }

  _setState (d) {
    this.setState({
      data: {
        title: 'Treemap', children: d
      }
    })
  }

  render () {
    return (
      <div className="container" styleName="container">
        <Content
          flex="2"
          left>
          <Treemap
            data={this.state.data}
            height={300}
            width={500}/>
        </Content>
      </div>
    )
  }
}

ReactTreemap.propTypes = {
  query: PropTypes.string
}

export default CSSModules(ReactTreemap, styles)
