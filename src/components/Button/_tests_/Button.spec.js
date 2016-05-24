import React from 'react'
import { Button } from '../Button'

describe('Button', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Button text="Skicka" />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('button')
  })

  it('should render with type submit', function () {
    expect(component).to.have.prop('type', 'submit')
  })

  it('should render with provided type', function () {
    component.setProps({
      type: 'button'
    })

    expect(component).to.have.prop('type', 'button')
  })

  it('should render correct styleName', () => {
    expect(component).to.have.prop('styleName', 'button')
  })

  it('should render a text', function () {
    expect(component).to.have.prop('children', 'Skicka')
  })
})
