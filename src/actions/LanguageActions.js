import alt from '../alt'

class LanguageActions {
  constructor () {
    this.generateActions('getLanguages')
  }

  setLanguage (name) {
    return name
  }
}

export default alt.createActions(LanguageActions)
