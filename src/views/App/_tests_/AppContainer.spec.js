import React from 'react'
import AppContainer from '../AppContainer'

describe('AppContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <AppContainer test="test" />
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
    const App = component.find('App')

    expect(App).to.have.prop('test', 'test')
  })
})
