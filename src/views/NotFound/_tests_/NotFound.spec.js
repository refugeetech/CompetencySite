import React from 'react'
import { NotFound } from '../NotFound'

describe('NotFound', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <NotFound />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'four-o-four')
  })

  it('should render a logo', () => {
    const logo = component.find('img')

    expect(logo).to.have.prop('src', '/static/images/logo.png')
    expect(logo).to.have.prop('styleName', 'logo')
  })

  it('should render an IndexLink', () => {
    const link = component.find('IndexLink')

    expect(link).to.have.prop('to', '/')
    expect(link.children().text()).to.eql('Return to the start page')
  })
})
