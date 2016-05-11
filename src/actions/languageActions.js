import alt from '../alt'

class LanguageActions {
  constructor () {
    this.generateActions(
      'define'
    )
  }

  setLanguage (language) {
    return language
  }
}

export default alt.createActions(LanguageActions)
