import React from 'react'
import { LanguageSelector } from '../LanguageSelector'

describe('LanguageSelector', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <LanguageSelector
        language="sv"
        languages={{
          sv: {
            test: 'test'
          }
        }} />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type().displayName).to.eql('Select')
  })
})
