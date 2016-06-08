import alt from '../alt'

class LanguageActions {
  constructor () {
    this.generateActions('setLanguage')
    this.generateActions('getLanguages')
  }
}

export default alt.createActions(LanguageActions)
