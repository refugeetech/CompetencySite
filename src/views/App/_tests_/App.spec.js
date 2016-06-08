import React from 'react'
import { App } from '../App'

describe('App', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <App>
        <div>Hej</div>
      </App>
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have a className', () => {
    expect(component).to.have.className('container language-en')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'app')
  })

  it('should render a Header', () => {
    expect(component.find('Header')).to.exist
  })

  it('should render children', () => {
    const div = component.find('div').last()

    expect(div).to.have.text('Hej')
  })
})
