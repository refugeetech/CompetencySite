import React from 'react'
import { Start } from '../Start'

describe('Start', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Start />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'content')
  })

  it('should render a Splash', () => {
    expect(component.find('SplashContainer')).to.exist
  })
})
