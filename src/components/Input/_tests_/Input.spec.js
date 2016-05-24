import React from 'react'
import { Input } from '../Input'

describe('Input', () => {
  let component
  let input

  beforeEach(() => {
    component = shallow(
      <Input
        label="läjbel"
        name="test"
        pattern="[0-9]*"
        placeholder="Skriv något fint" />
    )

    input = component.find('input')
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should render a placeholder', () => {
    expect(input).to.have.prop('placeholder', 'Skriv något fint')
  })

  it('should render with type text', () => {
    expect(input).to.have.prop('type', 'text')
  })

  it('should set id to be name', () => {
    expect(input).to.have.prop('id', 'test')
  })

  it('should render with a label', () => {
    const label = component.find('label')

    expect(label).to.have.prop('children', 'läjbel')
    expect(label).to.have.prop('htmlFor', 'test')
    expect(label).to.have.prop('styleName', 'label')
  })

  it('should render with provided type', () => {
    component.setProps({
      type: 'tel'
    })

    input = component.find('input')

    expect(input).to.have.prop('type', 'tel')
  })

  it('should render with a pattern', () => {
    expect(input).to.have.prop('pattern', '[0-9]*')
  })

  it('should send styleName to input', () => {
    expect(input).to.have.prop('styleName', 'input')
  })
})
