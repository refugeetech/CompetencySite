import React from 'react'
import { LanguageSelector } from '../LanguageSelector'

describe('LanguageSelector', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <LanguageSelector />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
