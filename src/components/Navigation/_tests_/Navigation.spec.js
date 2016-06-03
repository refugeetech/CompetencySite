import React from 'react'
import proxyquire from 'proxyquire'

describe('Navigation', () => {
  let component
  let Navigation
  let LanguageStore

  beforeEach(() => {
    LanguageStore = {
      default: {
        define: sinon.stub()
      }
    }

    /* Mocked language store */
    LanguageStore.default.define.withArgs('register').returns('register')
    LanguageStore.default.define.withArgs('aboutUs').returns('aboutUs')
    LanguageStore.default.define.withArgs('treeMap').returns('treeMap')

    Navigation = proxyquire('../Navigation', {
      '../../stores/LanguageStore': LanguageStore
    }).Navigation

    component = shallow(
      <Navigation />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('ul')
  })

  it('should have a styleName', () => {
    expect(component).to.have.prop('styleName', 'navigation')

    component.setProps({ right: true })
    expect(component).to.have.prop('styleName', 'navigation right')

    component.setProps({ white: true })
    expect(component).to.have.prop('styleName', 'navigation right white')
  })

  it('should render three links', () => {
    const links = component.find('li')

    expect(links).to.have.length(3)
  })

  it('should render a Link to register', () => {
    const link = component.find('Link').first()

    expect(link).to.have.prop('to', 'register')
    expect(link.children().text()).to.eql('register')
  })

  it('should render a Link to about', () => {
    const link = component.find('Link').at(1)

    expect(link).to.have.prop('to', 'about')
    expect(link.children().text()).to.eql('aboutUs')
  })

  it('should render a Link to treeMap', () => {
    const link = component.find('Link').last()

    expect(link).to.have.prop('to', 'visualization')
    expect(link.children().text()).to.eql('treeMap')
  })
})
