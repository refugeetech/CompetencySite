import React from 'react'
import { ButtonLink } from '../ButtonLink'

describe('ButtonLink', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <ButtonLink href="/test" text="testBtn" />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('a')
  })

  it('should have a href', () => {
    expect(component).to.have.prop('href', '/test')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'button')
  })

  it('should have a text', () => {
    expect(component).to.have.text('testBtn')
  })
})
