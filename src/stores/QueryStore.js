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

  static define (def) {
    const query = this.state.defs[this.state.query]

    if (!query || !query[def]) {
      return ''
    }

    return query[def]
  }

  setQuery (query) {
    if (!this.defs[query]) {
      this.query = ''
      return
    }

    this.query = query
  }
}

export default alt.createStore(QueryStore, 'QueryStore')
