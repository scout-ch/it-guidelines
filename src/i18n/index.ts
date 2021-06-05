import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, managDe them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  de: {
    translation: {
      home_page: {
        title: 'IT Richtlinien'
      },
      new_project_page: {
        title: 'Neues Projekt'
      },
      slides: {
        evaluation: {
          text: 'Danke fürs ausfüllen.',
          todo: {
            title: 'ToDo',
            contact_itkom: 'Kontakt aufnehmen mit der IT-Kom',
            define_po: 'Verantwortliche Person definieren',
            define_api_consumption: 'Definieren welche Daten von der MiData benötigt werden',
            check_existing: 'Herausfinden ob es nicht doch schon ähnliche Tools gibt',
            check_login: 'Abklären ob es wirklich kein Login braucht'
          },
          answers: {
            title: 'Antworten'
          }
        },
        projectPhase: {
          text: 'In welcher Phase des Projekts befindest du dich?',
          buttons: {
            idea: 'Idee',
            implementation: 'Umsetzung'
          }
        },
        targetAudience: {
          text: 'Wer ist das Zielpublikum?',
          buttons: {
            bundesebene: 'Bundesebene',
            canton: 'Kantone',
            external: 'Externe (z.B. Eltern)'
          }
        },
        toolType: {
          text: 'Werden Daten verarbeitet oder werden nur Inhalte dargestellt?',
          buttons: {
            dataProcessing: 'Daten verarbeiten',
            contentOnly: 'Nur Inhalte'
          }
        },
        loginNeeded: {
          text: 'Muss man sich einloggen können?',
          buttons: {
            yes: 'Ja',
            no: 'Nein'
          }
        },
        sensitiveData: {
          text: 'Werden schützenswerte Daten verarbeitet?',
          buttons: {
            yes: 'Ja',
            no: 'Nein',
            maybe: 'Glaubs nöd'
          }
        },
        apiNeeded: {
          text: 'Werden Daten von anderen IT-Tools benötigt?',
          buttons: {
            midata: 'Ja, von der MiData',
            other: 'Ein anderes Tool',
            no: 'Nein, braucht es nicht'
          }
        },
        similarToolAvailable: {
          text: 'Gibt es bereits ein ähnliches Tool in dieser Art (gratis oder kostenpflichtig)?',
          buttons: {
            yes: 'Ja, das gibts',
            no: 'Nein, gibt es nicht',
            maybe: 'Keine Ahnung'
          }
        },
        similarToolAvailableMaybe: {
          text: 'Dann kläre das doch bitte zuerst ab, bevor du ein neues Projekt startest!',
          buttons: {
            ok: 'Ok'
          }
        },
        responsibility: {
          text: 'Ist eine verantwortliche Person definiert?',
          buttons: {
            yes: 'Ja, ist klar',
            no: 'Nein, noch nicht',
            maybe: 'Wir brauchen das nicht'
          }
        }
      }
    }
  },
  fr: {
    translation: {
      home_page: {
        title: 'Lignes directrices IT'
      },
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'de', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
