import alt from '../alt'

class QueryActions {
  constructor () {
    this.generateActions('setQuery')
  }
}

export default alt.createActions(QueryActions)
