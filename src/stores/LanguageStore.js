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
    this.languages = {
      ar: ar,
      fa: fa,
      sv: sv,
      en: en
    }
  }

  static currentLanguage () {
    return this.state.language
  }

  static define (def) {
    const language = this.state.languages[this.state.language]

    if (!language || !language[def]) {
      return ''
    }

    return language[def]
  }

  static getLanguages () {
    return Object.keys(this.state.languages)
  }

  setLanguage (language) {
    if (!language) {
      return false
    }

    const newLanguage = language.split('_')[1]

    if (!this.languages[newLanguage]) {
      this.language = 'sv'
      return
    }

    this.language = newLanguage
  }
}

export default alt.createStore(LanguageStore, 'LanguageStore')
