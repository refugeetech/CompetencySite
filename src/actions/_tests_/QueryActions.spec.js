import alt from '../../alt'
import actionInformation from './actionInformation'
import QueryActions from '../QueryActions'

describe('QueryActions', () => {
  let dispatcherSpy

  beforeEach(() => {
    dispatcherSpy = sinon.spy(alt.dispatcher, 'dispatch')
  })

  afterEach(() => {
    alt.dispatcher.dispatch.restore()
  })

  it('should instantiate', () => {
    expect(QueryActions).to.be.an('object')
  })

  describe('#setQuery', () => {
    it('should dispatch', () => {
      QueryActions.setQuery('test')

      const info = actionInformation(dispatcherSpy.args[0])

      expect(dispatcherSpy).calledOnce
      expect(info.action).to.eql('QueryActions.setQuery')
      expect(info.data).to.eql('test')
    })
  })
})
