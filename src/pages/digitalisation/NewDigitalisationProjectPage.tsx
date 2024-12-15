import React, { useEffect, useState } from 'react'
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
  const [state] = useState<State>(defaultState)
  const [replies, setReplies] = useState<Reply[]>(defaultReplies)
  const { t } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState<number>(() => {
    const store = localStorage.getItem('digitalisationCurrentQuestion');
    if (store) {
      return JSON.parse(store) || 0
    }
    return 0
  });

  const [showScore, setShowScore] = useState<Boolean>(() => {
    const store = localStorage.getItem('digitalisationShowScore');
    if (store) {
      return Boolean(JSON.parse(store)) || false
    }
    return false
  });

  useEffect(() => {
    const store = localStorage.getItem('digitalisationReplies')
    if (store) {
      const items = JSON.parse(store);
      if (items) {
       setReplies(items);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("digitalisationReplies", JSON.stringify(replies));
  }, [replies]);

  useEffect(() => {
    localStorage.setItem("digitalisationShowScore", JSON.stringify(showScore));
  }, [showScore]);

  useEffect(() => {
    localStorage.setItem("digitalisationCurrentQuestion", JSON.stringify(currentQuestion));
  }, [currentQuestion]);

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
    // doesn't work because of response id includes option.... fuuu
    if (event) {
      if (event.target.checked) {

        const existing = replies.find((r:Reply) =>  r.id === question.key + option.key)
        if (existing) {
          setReplies(replies.filter(a =>
            a.id !== question.key + option.key
          ))
        } else {
          setReplies([
            ...replies,
            { id: question.key + option.key, question: question, response: option }
          ])
        }
      } else {
        setReplies(replies.filter(a =>
          a.id !== question.key + option.key
        ))
      }
      return
    }

    nextQuestion(option)
    
    const found = replies.find((r:Reply) =>  r.question.key === question.key)
    if (found) {
      found.response = option
      const newReplies = replies.map<Reply>((r: Reply) => r.question.key === question.key ? found : r)
      setReplies(newReplies)
    } else {
      setReplies([
        ...replies,
        { id: `${question.key}-${option.key}`, question: question, response: option }
      ])
    }
  }

  function printOptions(question: Question) {
    if (question.multiple_choice && question.multiple_choice === true) {
      const checkboxes = question.responses.map(function (option: Response) {
        const response = replies.find((r:Reply) =>  r.id === question.key + option.key)
        let storedResponseKey
        if (response) {
          storedResponseKey = response.response.key
        }
        return <div>
          <label>
            <Checkbox type="checkbox" value={option.key} name={question.key} 
            onChange={(e) => replyWith(option, question, e)}
            checked={storedResponseKey === option.key} />
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
      const replyStore = localStorage.getItem('digitalisationReplies')
      let storedResponseKey
      if (replyStore) {
        const items = JSON.parse(replyStore);
        const response:Reply = items.find((e: Reply) => e.question.key === question.key);
        if (response) {
          storedResponseKey = response.response.key
        }
      }
      return <Button key={option.key} type="button" onClick={() => replyWith(option, question)} className={storedResponseKey === option.key ? 'selected-response' : ''}>
        {t(`new_project_digitalisation_page.questions.${question.key}.responses.${option.key}`)}
      </Button>
    })
  }

  function printWarnings(warnings: Warning[]) {
    return warnings.map(function (warning: Warning) {
      return <li>{`${t(`new_project_digitalisation_page.questions.${warning.question.key}.text`)} => ${t(`new_project_digitalisation_page.questions.${warning.question.key}.responses.${warning.response.key}`)}`}</li>
    })
  }

  function restart() {
    setShowScore(false)
    setCurrentQuestion(0)
  }

  function reset() {
    setShowScore(false)
    setCurrentQuestion(0)
    setReplies(defaultReplies)
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
      {score.sort((a, b) => (b.score - a.score) || (a.warnings.length - b.warnings.length)).map((a) => {
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
        <Button type="button" onClick={() => restart()}>{t('new_project_digitalisation_page.evaluation.restart')}</Button>
        <Button type="button" onClick={() => reset()}>{t('new_project_digitalisation_page.evaluation.reset')}</Button>
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
