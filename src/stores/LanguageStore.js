import alt from '../alt'
import LanguageActions from '../actions/LanguageActions'
var en = require('../assets/json/en.json')
var ar = require('../assets/json/ar.json')
var fa = require('../assets/json/fa.json')
var sv = require('../assets/json/sv.json')

class LanguageStore {
  constructor () {
    this.bindListeners({
      setLanguage: LanguageActions.setLanguage
    })

    /**
     * State
     */
    this.language = 'sv'
    this.defs = {
      sv: sv,
      en: en
    }
  }

  static currentLanguage () {
    return this.state.language
  }

  static define (def) {
    const language = this.state.defs[this.state.language]

    if (!language || !language[def]) {
      return ''
    }

    return language[def]
  }

  static getLanguages () {
    return Object.keys(this.state.defs)
  }

  setLanguage (language) {
    if (!this.defs[language]) {
      this.language = 'sv'
      return
    }

    this.language = language
  }
}

export default alt.createStore(LanguageStore, 'LanguageStore')
