import React from 'react'
import { Content } from '../Content'

describe('Content', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Content>
        <span>Hi</span>
      </Content>
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have styleName', () => {
    expect(component).to.have.prop('styleName', 'content')
  })

  it('should have possibility for right styling', () => {
    component.setProps({ right: true })
    expect(component).to.have.prop('styleName', 'content right')
  })

  it('should have possibility for narrow styling', () => {
    component.setProps({ narrow: true })
    expect(component).to.have.prop('styleName', 'content narrow')
  })

  it('should have possibility for full styling', () => {
    component.setProps({ full: true })
    expect(component).to.have.prop('styleName', 'content full')
  })

  it('should add inline styling if wanted', () => {
    component.setProps({
      backgroundColor: 'red',
      backgroundImage: 'test.png',
      flex: '2'
    })

    expect(component).to.have.style('background-color', 'red')
    expect(component).to.have.style('background-image', 'test.png')
    expect(component).to.have.style('flex', '2')
  })

  it('should render an inner element', () => {
    const inner = component.find('div').at(1)

    expect(inner).to.have.prop('styleName', 'inner')
  })

  it('should render children', () => {
    const span = component.find('span')

    expect(span).to.have.text('Hi')
  })
})
