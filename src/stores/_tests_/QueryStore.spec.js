import alt from '../../alt'
import QueryActions from '../../actions/QueryActions'
import QueryStore from '../QueryStore'
import Dispatch from './Dispatch'

function getState (prop) {
  return QueryStore.getState()[prop]
}

describe('QueryStore', () => {
  let dispatch

  beforeEach(() => {
    alt.recycle('QueryStore')
    dispatch = new Dispatch(QueryActions)
  })

  it('should instantiate', () => {
    expect(QueryStore).to.be.an('object')
  })

  it('should set up listeners', () => {
    expect(QueryStore.boundListeners).to.eql([
      'QueryActions.setQuery'
    ])
  })

  it('should set intial state', () => {
    expect(getState('query')).to.eql('')
  })

  describe('#currentQuery (STATIC)', () => {
    it('should return currentQuery', () => {
      dispatch.send('set_query', 'test')
      
      expect(QueryStore.currentQuery()).to.eql('test')
    })
  })

  describe('#setQuery', () => {
    it('should set data', () => {
      dispatch.send('set_query', 'test')

      expect(getState('query')).to.eql('test')
    })
  })
})
