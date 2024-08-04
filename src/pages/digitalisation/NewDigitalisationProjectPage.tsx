import React, { useState } from 'react'
import ClippyStage from '../../components/ClippyStage'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import { MainContainer } from '../../App'
import { Question, ScoreList, WarningList, Response, Warning, Root } from '../../types';
import { Button, ButtonContainer } from '../HomePage';
import questionJson from './../../questions.json';

type State = {
  currentSlide: string;
  clippyVariant: "" | "focus" | "rolleye" | 'angry';
}

const defaultState = (): State => ({ currentSlide: 'projectPhase', clippyVariant: 'focus' })
const defaultScore = (): ScoreList => ({
  tools: {
    app: 0,
    game: 0,
    youtube: 0,
    website: 0,
    pdf: 0,
    office: 0,
    pm_tool: 0,
    collaboration: 0,
    e_learning: 0,
    podcast: 0
  }
})
const defaultWarning = (): WarningList => ({
  tools: {
    app: [],
    game: [],
    youtube: [],
    website: [],
    pdf: [],
    office: [],
    pm_tool: [],
    collaboration: [],
    e_learning: [],
    podcast: []
  }
})

export default function NewDigitalisationProjectPage() {
  const [state, setState] = useState<State>(defaultState)
  const { t } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<Boolean>(false);
  const [score, setScore] = useState<ScoreList>(defaultScore);
  const [warnings, setWarnings] = useState<WarningList>(defaultWarning);

  function updateScore(question: Question, option: Response) {
    let newState = score
    if (option.tools.includes('app')) {
      newState = {
        tools: {
          ...newState.tools,
          app: score.tools.app + 1
        }
      }
    }
    if (option.tools.includes('game')) {
      newState = {
        tools: {
          ...newState.tools,
          game: score.tools.game + 1
        }
      }
    }
    if (option.tools.includes('youtube')) {
      newState = {
        tools: {
          ...newState.tools,
          youtube: score.tools.youtube + 1
        }
      }
    }
    if (option.tools.includes('e_learning')) {
      newState = {
        tools: {
          ...newState.tools,
          e_learning: score.tools.e_learning + 1
        }
      }
    }
    if (option.tools.includes('website')) {
      newState = {
        tools: {
          ...newState.tools,
          website: score.tools.website + 1
        }
      }
    }
    if (option.tools.includes('podcast')) {
      newState = {
        tools: {
          ...newState.tools,
          podcast: score.tools.podcast + 1
        }
      }
    }
    if (option.tools.includes('office')) {
      newState = {
        tools: {
          ...newState.tools,
          office: score.tools.office + 1
        }
      }
    }
    if (option.tools.includes('pdf')) {
      newState = {
        tools: {
          ...newState.tools,
          pdf: score.tools.pdf + 1
        }
      }
    }
    if (option.tools.includes('pm_tool')) {
      newState = {
        tools: {
          ...newState.tools,
          pm_tool: score.tools.pm_tool + 1
        }
      }
    }
    if (option.tools.includes('collaboration')) {
      newState = {
        tools: {
          ...newState.tools,
          collaboration: score.tools.collaboration + 1
        }
      }
    }
    setScore(newState)
  }

  function updateWarnings(question: Question, option: Response) {
    let newState = warnings
    if (option.kills.includes('app')) {
      newState = {
        tools: {
          ...newState.tools,
          app: warnings.tools.app.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('game')) {
      newState = {
        tools: {
          ...newState.tools,
          game: warnings.tools.game.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('youtube')) {
      newState = {
        tools: {
          ...newState.tools,
          youtube: warnings.tools.youtube.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('e_learning')) {
      newState = {
        tools: {
          ...newState.tools,
          e_learning: warnings.tools.e_learning.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('website')) {
      newState = {
        tools: {
          ...newState.tools,
          website: warnings.tools.website.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('podcast')) {
      newState = {
        tools: {
          ...newState.tools,
          podcast: warnings.tools.podcast.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('office')) {
      newState = {
        tools: {
          ...newState.tools,
          office: warnings.tools.office.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('pdf')) {
      newState = {
        tools: {
          ...newState.tools,
          pdf: warnings.tools.pdf.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('pm_tool')) {
      newState = {
        tools: {
          ...newState.tools,
          pm_tool: warnings.tools.pm_tool.concat({ question: question, response: option })
        }
      }
    }
    if (option.kills.includes('collaboration')) {
      newState = {
        tools: {
          ...newState.tools,
          collaboration: warnings.tools.collaboration.concat({ question: question, response: option })
        }
      }
    }
    setWarnings(newState)
  }

  function replyWith(option: Response, question: Question) {
    let nextQuestion = currentQuestion + 1;
    if (option.next_question) {
      nextQuestion = option.next_question
    }

    if (nextQuestion < questionJson.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
    updateScore(question, option)
    updateWarnings(question, option)
  }

  function printOptions(question: Question) {
    return question.responses.map(function (option: Response) {
      return <Button key={option.key} type="button" onClick={() => replyWith(option, question)}>
        {t(`new_project_digitalisation_page.questions.${question.key}.responses.${option.key}`)}
      </Button>
    })
  }

  function printWarnings(warnings: Warning[]) {
    return warnings.map(function (warning: Warning) {
      return <li>{`${t(`new_project_digitalisation_page.questions.${warning.question.key}.text`)} => ${t(`new_project_digitalisation_page.questions.${warning.question.key}.responses.${warning.response.key}`)}`}</li>
    })
  }

  const questionsRoot: Root = questionJson
  const questions: Question[] = questionsRoot.questions


  function calculateResult() {
    const scoreResultsSortedAndSliced: [string, number][] = Object.entries(score.tools).sort(([, a], [, b]) => b - a)//.slice(5)
    const warningEntries: [string, Warning[]][] = Object.entries(warnings.tools)

    return <div className='result-section'>
      {scoreResultsSortedAndSliced.map((a) => {
        let warnings = warningEntries.find((warning) => {
          return warning[0] === a[0]
        })
        return <div>
          <h3>{t(`new_project_digitalisation_page.tools.${a[0]}`)} (Score: {a[1]})</h3>
          {warnings && warnings[1].length > 0 ?
            <div><h5>Warnungen</h5>
              <ul>
                {printWarnings(warnings[1])}
              </ul>
            </div>
            :
            ""
          }
          <hr/>

        </div>
      })}
    </div>
  }


  return <MainContainer>
    <Helmet>
      <title>{t('new_project_digitalisation_page.title')}</title>
    </Helmet>
    <h1>{t('new_project_digitalisation_page.title')}</h1>
    <ClippyStage variant={state.clippyVariant}>
    {showScore ? <div className='score-section'>
        <h2>{t("new_project_digitalisation_page.evaluation.title")}</h2>
        {calculateResult()}
      </div> :
        <div className='question-section'>
          <div className='question-text'><p>{t(`new_project_digitalisation_page.questions.${questions[currentQuestion].key}.text`)}</p></div>
          <div className='answer-section'><ButtonContainer>{printOptions(questions[currentQuestion])}</ButtonContainer></div>
        </div>
      }
      {/* {!showScore ? calculateResult() : ''} */}
    </ClippyStage >
  </MainContainer >
}
