import React, { useState } from 'react'
import ClippyStage from '../../components/ClippyStage'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import { MainContainer } from '../../App'
import { Question, ScoreList, Response, Warning, Root, Reply } from '../../types';
import { Button, ButtonContainer } from '../HomePage';
import questionJson from './../../questions.json';
import styled from '@emotion/styled';

type State = {
  currentSlide: string;
  clippyVariant: "" | "focus" | "rolleye" | 'angry';
}

const Checkbox = styled.input`
    margin-right: 10px
`

const defaultState = (): State => ({ currentSlide: 'projectPhase', clippyVariant: 'focus' })

const defaultReplies = (): Reply[] => ([])

export default function NewDigitalisationProjectPage() {
  const [state, setState] = useState<State>(defaultState)
  const [replies, setReplies] = useState<Reply[]>(defaultReplies)
  const { t } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<Boolean>(false);


  function nextQuestion(option: Response) {
    let nextQuestion = currentQuestion + 1;
    if (option.next_question) {
      nextQuestion = option.next_question
    }

    if (nextQuestion < questionJson.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
    return
  }

  function replyWith(option: Response, question: Question, event?: React.ChangeEvent<HTMLInputElement>) {
    if (event) {
      if (event.target.checked) {
        setReplies([
          ...replies,
          { id: question.key + option.key, question: question, response: option }
        ])
      } else {
        setReplies(replies.filter(a =>
          a.id !== question.key + option.key
        ))
      }
      return
    }

    nextQuestion(option)

    setReplies([
      ...replies,
      { id: `${question.key}-${option.key}`, question: question, response: option }
    ])
  }

  function printOptions(question: Question) {
    if (question.multiple_choice && question.multiple_choice === true) {
      const checkboxes = question.responses.map(function (option: Response) {
        return <div>
          <label>
            <Checkbox type="checkbox" value={option.key} name={question.key} onChange={(e) => replyWith(option, question, e)} />
            {t(`new_project_digitalisation_page.questions.${question.key}.responses.${option.key}`)}
          </label>
        </div>
      })
      return <div id={question.key}>
        {checkboxes}<br />
        <Button type="button" onClick={() => nextQuestion(question.responses[0])}>{t('new_project_digitalisation_page.questions.next')}</Button>
      </div>
    }

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

    let score: ScoreList[] = [
      { key: 'app', score: 0, warnings: [] },
      { key: 'game', score: 0, warnings: [] },
      { key: 'youtube', score: 0, warnings: [] },
      { key: 'website', score: 0, warnings: [] },
      { key: 'pdf', score: 0, warnings: [] },
      { key: 'office', score: 0, warnings: [] },
      { key: 'pm_tool', score: 0, warnings: [] },
      { key: 'collaboration', score: 0, warnings: [] },
      { key: 'e_learning', score: 0, warnings: [] },
      { key: 'podcast', score: 0, warnings: [] }
    ]
    replies.forEach(function (reply: Reply) {
      reply.response.tools.forEach(function (tool: string) {
        const scoreTool = score.find(a => a.key === tool)
        if (scoreTool) {
          scoreTool.score += 1
        }
      })
      reply.response.kills.forEach(function (tool: string) {
        const killTool = score.find(a => a.key === tool)
        if (killTool) {
          killTool.warnings.push({ question: reply.question, response: reply.response })
        }
      })
    })

    return <div className='result-section'>
      {score.sort((a, b) => b.score - a.score).map((a) => {
        let warnings = a.warnings
        return <div>
          <h3>{t(`new_project_digitalisation_page.tools.${a.key}`)} (Score: {a.score})</h3>
          {warnings && warnings.length > 0 ?
            <div><h5>{t('new_project_digitalisation_page.questions.warnings')}</h5>
              <ul>
                {printWarnings(warnings)}
              </ul>
            </div>
            :
            ""
          }
          <hr />

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
