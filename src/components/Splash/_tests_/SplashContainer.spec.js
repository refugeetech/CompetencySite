import React from 'react'
import SplashContainer from '../SplashContainer'

describe('SplashContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <SplashContainer test="test" />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type().name).to.eql('AltContainer')
  })

  it('should add the correct store', () => {
    expect(component.prop('store').displayName).to.eql('LanguageStore')
  })

  it('should render the component with props', () => {
    const Splash = component.find('Splash')

    expect(Splash).to.have.prop('test', 'test')
  })
})
