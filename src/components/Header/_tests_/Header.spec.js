import React from 'react'
import { Header } from '../Header'

describe('Header', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Header />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'header')
  })

  it('should render an IndexLink', () => {
    const link = component.find('IndexLink')

    expect(link).to.have.prop('to', '/')
  })

  it('should render a logo', () => {
    const logo = component.find('img')
    const parent = logo.parent()

    expect(parent.type().displayName).to.eql('IndexLink')

    expect(logo).to.have.prop('src', '/static/images/logo.png')
    expect(logo).to.have.prop('styleName', 'logo')
  })

  it('should render Navigation', () => {
    expect(component.find('Navigation')).to.have.prop('right', true)
  })
})
