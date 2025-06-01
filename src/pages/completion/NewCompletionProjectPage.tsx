
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import { MainContainer } from '../../App'
import { Checkbox, State } from '../digitalisation/NewDigitalisationProjectPage';
import { useState } from 'react';
import { Question, Response, Root, Reply } from '../../types';
import ClippyStage from '../../components/ClippyStage';
import questionJson from './completion_questions.json';
import { Button, ButtonContainer } from '../HomePage';

const defaultState = (): State => ({ currentSlide: 'projectPhase', clippyVariant: 'focus' })
const defaultReplies = (): Reply[] => ([])

export default function NewCompletionProjectPage() {
  const [state] = useState<State>(defaultState)
  const [replies, setReplies] = useState<Reply[]>(defaultReplies)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [showResult, setShowResult] = useState<Boolean>(false);

  const { t } = useTranslation()

  const questionsRoot: Root = questionJson
  const questions: Question[] = questionsRoot.questions

  function nextQuestion(option: Response) {
    let nextQuestion = currentQuestion + 1;
    if (option.next_question) {
      nextQuestion = option.next_question
    }

    if (nextQuestion < questionJson.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true)
    }
    return
  }
  function replyWith(option: Response, question: Question, event?: React.ChangeEvent<HTMLInputElement>) {
    if (event) {
      if (event.target.checked) {

        const existing = replies.find((r: Reply) => r.id === question.key + option.key)
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

    const found = replies.find((r: Reply) => r.question.key === question.key)
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
        return <div>
          <label>
            <Checkbox id={option.key + question.key} type="checkbox" value={option.key} name={question.key}
              onChange={(e) => replyWith(option, question, e)} />
            {t(`new_project_completion_page.questions.${question.key}.responses.${option.key}`)}
          </label>
        </div>
      })
      return <div id={question.key} key={question.key}>
        {checkboxes}<br />
        <Button type="button" onClick={() => nextQuestion(question.responses[0])}>{t('new_project_completion_page.questions.next')}</Button>
      </div>
    }

    return question.responses.map(function (option: Response) {
      return <Button key={option.key} type="button" onClick={() => replyWith(option, question)}>
        {t(`new_project_completion_page.questions.${question.key}.responses.${option.key}`)}
      </Button>
    })
  }

  function splitReplies(replies: Reply[]) {
    // Single-choice replies (not multiple_choice)
    const singleChoiceReplies = replies.filter(
      (reply) => !reply.question.multiple_choice
    );

    // Grouped multiple-choice replies
    const multiChoiceGroups: { [questionKey: string]: Reply[] } = {};
    replies.forEach((reply) => {
      if (reply.question.multiple_choice) {
        if (!multiChoiceGroups[reply.question.key]) {
          multiChoiceGroups[reply.question.key] = [];
        }
        multiChoiceGroups[reply.question.key].push(reply);
      }
    });

    return {
      singleChoiceReplies,
      multiChoiceGroups, // object: { [questionKey]: Reply[] }
    };
  }

  function calculateResult() {
    let hints: string[] = []
    let defaultHints = [
      t("new_project_completion_page.result.hints.defaults.contact_itkom"),
      t("new_project_completion_page.result.hints.defaults.fill_concept")
    ]
    hints.push(...defaultHints)

    replies.map(function (reply: Reply) {
      if (reply.response.result_hint_key) {
        hints.push(t(`new_project_completion_page.questions.${reply.question.key}.${reply.response.result_hint_key}`))
      }
    })

    const { singleChoiceReplies, multiChoiceGroups } = splitReplies(replies);

    return <div>
      <h2>{t("new_project_completion_page.result.hints.title")}</h2>
      <ul>
        {hints.map((hint, index) => <li key={index}>{hint}</li>)}
      </ul>

      <h2>{t("new_project_completion_page.result.answers.title")}</h2>
      {singleChoiceReplies.map(function (reply: Reply) {
        return (
          <div key={reply.id}>
            <p>
              <em>{t(`new_project_completion_page.questions.${reply.question.key}.text`)}</em>
              <br />
              {t(`new_project_completion_page.questions.${reply.question.key}.responses.${reply.response.key}`)}
            </p>
          </div>
        )
      })}
      {Object.entries(multiChoiceGroups).map(([questionKey, groupReplies]: [string, Reply[]]) => (
        <div key={questionKey}>
          <p>
            <em>{t(`new_project_completion_page.questions.${questionKey}.text`)}</em>
          </p>
          <ul>
            {groupReplies.map((reply) => (
              <li key={reply.id}>
                {t(`new_project_completion_page.questions.${reply.question.key}.responses.${reply.response.key}`)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  }

  return <MainContainer>
    <Helmet>
      <title>{t('new_project_completion_page.title')}</title>
    </Helmet>
    <h1>{t('new_project_completion_page.title')}</h1>

    <ClippyStage variant={state.clippyVariant}>
      {showResult ?
        <div>
          {calculateResult()}
        </div>
        :
        <div className='question-section'>
          <div className='question-text'><p>{t(`new_project_completion_page.questions.${questions[currentQuestion].key}.text`)}</p></div>
          <div className='answer-section'><ButtonContainer>{printOptions(questions[currentQuestion])}</ButtonContainer></div>
        </div>
      }
    </ClippyStage>
  </MainContainer >
}
