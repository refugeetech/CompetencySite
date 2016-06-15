import React from 'react'
import LanguageSelectorContainer from '../LanguageSelectorContainer'

describe('LanguageContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <LanguageSelectorContainer test="test" />
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
    const Language = component.find('Language')

    expect(Language).to.have.prop('test', 'test')
  })
})
