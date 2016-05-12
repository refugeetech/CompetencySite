import alt from '../alt'

class LanguageStore {
  constructor () {
    this.language = 'sv'
    this.defs = {
      sv: {
        'title': 'Låt jobben hitta dig istället',
        'intro': 'Som nyanländ tar det tid innan du kan börja jobba. Genom att dela din nuvarande arbetsstatus och dina kompetenser även innan du har ett personnummer kan potentiella arbetsgivare få koll på att du finns och erbjuda praktikplatser.'
      }
    }
  }

  setLanguage (language) {
    this.language = language
  }

  static define (def) {
    return this.state.defs[this.state.language][def]
  }
}

export default alt.createStore(LanguageStore, 'LanguageStore')
