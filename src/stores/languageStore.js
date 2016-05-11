import alt from '../alt'
import LanguageActions from '../actions/LanguageActions'

class LanguageStore {
  constructor () {
    this.bindListeners({
      setLanguage: LanguageActions.setLanguage,
      define: LanguageActions.define
    })

    this.language = 'sv'
    this.defs = {
      sv: {
        'title': 'Låt jobben hitta dig istället'
      }
    }
  }

  setLanguage (language) {
    this.language = language
  }

  define (def) {
    console.log('hit kommer vi nu', def, this.defs, this.defs[this.language], this.defs[this.language][def])
    let meow = this.defs[this.language][def]
    console.log('ret', meow)
    return meow
  }
}

export default alt.createStore(LanguageStore, 'LanguageStore')
