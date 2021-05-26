import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      slides: {
        projectPhase: {
          question: 'In welcher Phase des Projekts befindest du dich?',
          answers: {
            idea: 'Idee',
            implementation: 'Umsetzung'
          }
        },
        targetAudience: {
          question: 'Wer ist das Zielpublikum?',
          answers: {
            bundesebene: 'Bundesebene',
            canton: 'Kantone',
            external: 'Externe (z.B. Eltern)'
          }
        },
        toolType: {
          question: 'Werden Daten verarbeitet oder werden nur Inhalte dargestellt?',
          answers: {
            dataProcessing: 'Daten verarbeiten',
            contentOnly: 'Nur Inhalte'
          }
        },
        loginNeeded: {
          question: 'Muss man sich einloggen können?',
          answers: {
            yes: 'Ja',
            no: 'Nein',
          }
        },
        sensitiveData: {
          question: 'Werden schützenswerte Daten verarbeitet?',
          answers: {
            yes: 'Ja',
            no: 'Nein',
            maybe: 'Glaubs nöd'
          }
        },
        apiNedded: {
          question: 'Werden Daten von anderen IT-Tools benötigt?',
          answers: {
            midata: 'Ja, von der MiData',
            other: 'Ein anderes Tool',
            no: 'Nein, braucht es nicht'
          }
        },
        similarToolAvailable: {
          question: 'Gibt es bereits ein ähnliches Tool in dieser Art (gratis oder kostenpflichtig)?',
          answers: {
            yes: 'Ja, das gibts',
            no: 'Nein, gibt es nicht',
            maybe: 'Keine Ahnung'
          }
        },
        responsibility: {
          question: 'Ist eine verantwortliche Person definiert?',
          answers: {
            yes: 'Ja, ist klar',
            no: 'Nein, noch nicht',
            maybe: 'Wir brauchen das nicht'
          }
        }
      },
    }
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
