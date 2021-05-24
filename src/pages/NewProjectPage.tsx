import styled from '@emotion/styled'
import React, { ReactNode, SetStateAction, useState } from 'react'
import ClippyStage from '../components/ClippyStage'
import { useTranslation } from 'react-i18next';

const MainContainer = styled.main`
  padding: 1rem;
  height: 100%;
`

const ButtonContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
`

const Button = styled.button`
  font-size: 1em;
  padding: .5em;
  text-align: center;
  min-width: 5em;
  background-color: #DDD;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #EEE;
  }

  & + & {
    margin-left: 1em;
  }
`

type State = {
  currentSlide: string;
  clippyVariant: "" | "focus" | "rolleye";
  projectPhase?: "idea" | "implementation";
}

type SlideProps = {
  text: string;
  choices: ChoiceType[];
}

type Slidable = (state: State, setState: React.Dispatch<SetStateAction<State>>) => ReactNode

interface ChoiceType {
  // key: string;
  text: string;
  mutator: () => void;
}

const slides: { [key: string]: Slidable } = {
  "projectPhase": (state, setState) => <Slide
    text="slides.projectPhase.question"
    choices={[
      { text: "slides.projectPhase.answers.idea", mutator: () => setState(prevState => ({ ...prevState, projectPhase: 'idea', currentSlide: 'targetAudience' })) },
      { text: "slides.projectPhase.answers.implementation", mutator: () => setState(prevState => ({ ...prevState, projectPhase: 'implementation', currentSlide: 'targetAudience' })) },
    ]}></Slide>,
  "targetAudience": (state, setState) => <Slide
    text="slides.targetAudience.question"
    choices={[
      { text: "bundesebene", mutator: () => setState(prevState => ({ ...prevState, currentSlide: '' })) },
    ]}></Slide>,
}

const defaultState = (): State => ({ currentSlide: 'projectPhase', clippyVariant: 'focus' })

function Slide({ text, choices }: SlideProps) {
  const { t, i18n } = useTranslation();


  return <>
    <p>{t(text)}</p>
    <ButtonContainer>
      {choices.map(choice => <Button onClick={() => choice.mutator()} type="button">{t(choice.text)}</Button>)}
    </ButtonContainer>
  </>
}

export default function NewProjectPage() {
  const [state, setState] = useState<State>(defaultState)
  const slide = slides[state.currentSlide]

  return <MainContainer>
    <h1>Neues Projekt</h1>
    {<ClippyStage variant={state.clippyVariant}>
      {slide != null && slide(state, setState)}
    </ClippyStage>}
  </MainContainer>
}
