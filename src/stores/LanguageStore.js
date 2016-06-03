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
        'buttonEmployee': 'Jag är arbetsgivare',
        'registeredPeople': 'قبل, في أما:',
        'register': 'ف',
        'aboutUs': 'لأوروبيّون',
        'treeMap': 'نمودار'
      },
      fa: {
        title: 'پزشک',
        'intro': 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        'buttonTellAboutYourself': 'لورم ایپسوم متن',
        'buttonEmployee': 'Jag är arbetsgivare',
        'registeredPeople': 'لورم ایپسوم متن:',
        'register': 'لورم',
        'aboutUs': 'لورم ایپسوم',
        'treeMap': 'Visualization'
      },
      sv: {
        'title': 'Vi visar bredden av kompetenser hos migranter',
        'intro': 'Vårt mål är att sysselsätta alla nyanlända med meningsfulla uppgifter genom att utgå ifrån deras kompetenser. Här är en enkel tjänst för att samla in nyanländas kompetenser. Vi kommer visualisera detta och återkommer med resultat när vi fått 1000 personer att registrera sig. Sprid detta och be alla migranter registrera sin profil här nedan. Du kan även skicka länken http://app.competency.se som går direkt till registreringssidan som även finns översatt till flera språk.',
        'buttonTellAboutYourself': 'Jag söker jobb',
        'buttonEmployee': 'Jag är arbetsgivare (demo)',
        'registeredPeople': 'Registrerade personer:',
        'register': 'Registrera',
        'aboutUs': 'Om oss',
        'treeMap': 'Diagram & statistik'
      },
      en: {
        'title': 'Let the jobs find you instead',
        'intro': 'When recently arrived it takes time before you can start working. Sharing your current work status and competencies, even before you have recieved a social security number, will give potential employers an insight and opportunity to offer trainee jobs.',
        'buttonTellAboutYourself': 'I\'m looking for a job',
        'buttonEmployee': 'Employers (demo)',
        'registeredPeople': 'Registered people:',
        'register': 'Register',
        'aboutUs': 'About us',
        'treeMap': 'Visualization'
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
