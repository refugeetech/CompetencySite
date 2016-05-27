import alt from '../../alt'
import actionInformation from './actionInformation'
import LanguageActions from '../LanguageActions'

describe('LanguageActions', () => {
  let dispatcherSpy

  beforeEach(() => {
    dispatcherSpy = sinon.spy(alt.dispatcher, 'dispatch')
  })

  afterEach(() => {
    alt.dispatcher.dispatch.restore()
  })

  it('should instantiate', () => {
    expect(LanguageActions).to.be.an('object')
  })

  describe('#setLanguage', () => {
    it('should dispatch a language', () => {
      LanguageActions.setLanguage('en')

      const info = actionInformation(dispatcherSpy.args[0])

      expect(dispatcherSpy).calledOnce
      expect(info.action).to.eql('LanguageActions.setLanguage')
      expect(info.data).to.eql('en')
    })
  })
})
