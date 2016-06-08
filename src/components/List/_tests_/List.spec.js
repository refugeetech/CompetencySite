import React from 'react'
import { List } from '../List'

describe('List', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <List items={[{
        content: 'stuff',
        title: 'test'
      }]} />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('ul')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'list')
  })

  it('should render one item', () => {
    expect(component.find('li')).to.have.length(1)
  })

  it('should render a title in item', () => {
    const title = component.find('span')

    expect(title).to.have.prop('styleName', 'title')
    expect(title).to.have.text('test')
  })

  it('should render content of item', () => {
    expect(component.find('li').children().last()).to.have.text('stuff')
  })
})
