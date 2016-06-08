import React from 'react'
import proxyquire from 'proxyquire'

describe('Splash', () => {
  let component
  let LanguageStore
  let Splash

  beforeEach(() => {
    LanguageStore = {
      default: {
        define: sinon.stub()
      }
    }

    /* Mocked language store */
    LanguageStore.default.define.withArgs('title').returns('title')
    LanguageStore.default.define.withArgs('intro').returns('intro')
    LanguageStore.default.define.withArgs('buttonTellAboutYourself').returns('buttonAbout')
    LanguageStore.default.define.withArgs('buttonEmployer').returns('buttonEmployer')

    Splash = proxyquire('../Splash', {
      '../../stores/LanguageStore': LanguageStore
    }).Splash

    component = shallow(
      <Splash />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })

  it('should have a class', () => {
    expect(component).to.have.className('container')
  })

  it('should render a Content', () => {
    const content = component.find('Content')

    expect(content).to.have.prop('backgroundImage', 'url(/static/images/bg2.jpg)')
    expect(content).to.have.prop('flex', '2')
    expect(content).to.have.prop('left', true)
  })

  it('should render a logo', () => {
    const logo = component.find('img')

    expect(logo).to.have.prop('src', '/static/images/logo_flush.png')
    expect(logo).to.have.prop('styleName', 'logo')
  })

  it('should render a title', () => {
    const title = component.find('h1')

    expect(title).to.have.prop('styleName', 'title')
    expect(title).to.have.text('title')
  })

  it('should render content', () => {
    const content = component.find('div').at(2)

    expect(content)
      .to.have.prop('dangerouslySetInnerHTML')
      .to.deep.equal({
        __html: '<p>intro</p>\n'
      })
  })

  it('should render ButtonLink to about user', () => {
    const button = component.find('ButtonLink').first()
    const parent = button.parent()

    expect(parent).to.have.prop('styleName', 'buttoncontainer')

    expect(button).to.have.prop('href', 'http://app.competency.se')
    expect(button).to.have.prop('text', 'buttonAbout')
  })

  it('should render ButtonLink for employers', () => {
    const button = component.find('ButtonLink').last()
    const parent = button.parent()

    expect(parent).to.have.prop('styleName', 'buttoncontainer')

    expect(button).to.have.prop('href', 'http://bl.ocks.org/cggaurav/raw/12abf0d51111407a1ae7c8a89b1926c4')
    expect(button).to.have.prop('text', 'buttonEmployer')
  })
})
