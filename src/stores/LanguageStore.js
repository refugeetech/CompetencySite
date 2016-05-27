import alt from '../alt'
import LanguageActions from '../actions/LanguageActions'

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
      ar: {
        title: 'لكون',
        'intro': 'في انه الثقيلة وباستثناء. بـ بحشد ووصف به،, بلاده تاريخ مقاطعة بل حيث. عن وقرى ألمانيا ويكيبيديا انه. حتى أم الصين الشتاء،, بسبب الشتاء، جعل ما.  قد أضف مرمى تشكيل الأولية. إذ جدول مرمى الطرفين وصل, ولاتّساع الأمريكي ثم شيء. هاربر وباستثناء مع كما. بل عليها وقدّموا وايرلندا مما, أم ثانية الصفحات حيث. تحت عل الحيلولة التقليدي.',
        'buttonTellAboutYourself': 'الى انذار',
        'registeredPeople': 'قبل, في أما:',
        'register': 'ف',
        'aboutUs': 'لأوروبيّون'
      },
      fa: {
        title: 'پزشک',
        'intro': 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        'buttonTellAboutYourself': 'لورم ایپسوم متن',
        'registeredPeople': 'لورم ایپسوم متن:',
        'register': 'لورم',
        'aboutUs': 'لورم ایپسوم'
      },
      sv: {
        'title': 'Låt jobben hitta dig istället',
        'intro': 'Som nyanländ tar det tid innan du kan börja jobba. Genom att dela din nuvarande arbetsstatus och dina kompetenser även innan du har ett personnummer kan potentiella arbetsgivare få koll på att du finns och erbjuda praktikplatser.',
        'buttonTellAboutYourself': 'Berätta om dig',
        'registeredPeople': 'Registrerade personer:',
        'register': 'Registrera',
        'aboutUs': 'Om oss'
      },
      en: {
        'title': 'Let the jobs find you instead',
        'intro': 'Som nyanländ tar det tid innan du kan börja jobba. Genom att dela din nuvarande arbetsstatus och dina kompetenser även innan du har ett personnummer kan potentiella arbetsgivare få koll på att du finns och erbjuda praktikplatser.',
        'buttonTellAboutYourself': 'Tell us about you',
        'registeredPeople': 'Registered people:',
        'register': 'Register',
        'aboutUs': 'About us'
      }
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

  setLanguage (language) {
    if (!this.defs[language]) {
      this.language = 'sv'
      return
    }

    this.language = language
  }
}

export default alt.createStore(LanguageStore, 'LanguageStore')
