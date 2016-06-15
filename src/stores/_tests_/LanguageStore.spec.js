import alt from '../../alt'
import LanguageActions from '../../actions/LanguageActions'
import LanguageStore from '../LanguageStore'
import Dispatch from './Dispatch'

function getState (prop) {
  return LanguageStore.getState()[prop]
}

describe('LanguageStore', () => {
  let dispatch

  beforeEach(() => {
    alt.recycle('LanguageStore')
    dispatch = new Dispatch(LanguageActions)
  })

  it('should instantiate', () => {
    expect(LanguageStore).to.be.an('object')
  })

  it('should set up listeners', () => {
    expect(LanguageStore.boundListeners).to.eql([
      'LanguageActions.setLanguage'
    ])
  })

  it('should set initial state', () => {
    expect(getState('language')).to.eql('sv')

    expect(getState('languages').ar).to.be.an('object')
    expect(getState('languages').fa).to.be.an('object')
    expect(getState('languages').en).to.be.an('object')
    expect(getState('languages').sv).to.be.an('object')
  })

  describe('#setLanguage', () => {
    it('should not do anything if language is null or undefined', () => {
      dispatch.send('set_language', null)

      expect(getState('language')).to.eql('sv')
    })

    it('should set language', () => {
      dispatch.send('set_language', 'en')

      expect(getState('language')).to.eql('en')
    })

    it('should set language to Swedish if language is not found', () => {
      dispatch.send('set_language', 'za')

      expect(getState('language')).to.eql('sv')
    })
  })

  describe('#currentLanguage (STATIC)', () => {
    it('should return current language', () => {
      expect(LanguageStore.currentLanguage()).to.eql('sv')
    })
  })

  describe('#define (STATIC)', () => {
    it('should return empty string if value is not set', () => {
      expect(LanguageStore.define('blabla')).to.eql('')
    })

    it('should return definition', () => {
      dispatch.send('set_language', 'en')

      expect(LanguageStore.define('title')).to.eql('Let the jobs find you instead')
    })
  })
})
