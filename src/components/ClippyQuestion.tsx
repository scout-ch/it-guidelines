import React, { PropsWithChildren } from 'react'


type AnswerButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

function AnswerButton ({ children, onClick }: AnswerButtonProps) {
  return <button onClick={() => onClick && onClick()}>{children}</button>
}


interface ClippyQuestionProps {
  question: string;
  possibleAnswers: string[];
}

export default function ClippyQuestion({ question, possibleAnswers }: ClippyQuestionProps) {
  return <dl>
    <dt>{question}</dt>
    {possibleAnswers.map(answer => <dd><AnswerButton>{answer}</AnswerButton></dd>)}
  </dl>
}
