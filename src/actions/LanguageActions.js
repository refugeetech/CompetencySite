import alt from '../alt'

class LanguageActions {
  constructor () {
    this.generateActions('setLanguage')
  }
}

export default alt.createActions(LanguageActions)
