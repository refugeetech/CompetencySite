import alt from '../alt'
import QueryActions from '../actions/QueryActions'

class QueryStore {
  constructor () {
    this.bindListeners({
      setQuery: QueryActions.setQuery
    })
  }

  static currentQuery () {
    return this.state.query
  }

  setQuery (query) {
    this.query = query
  }
}

export default alt.createStore(QueryStore, 'QueryStore')
