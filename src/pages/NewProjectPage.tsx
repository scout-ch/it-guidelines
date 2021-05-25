import styled from '@emotion/styled'
import React, { useState } from 'react'
import ClippyStage from '../components/ClippyStage'
import { useTranslation } from 'react-i18next';

const MainContainer = styled.main`
  padding: 1rem;
  flex-grow: 1;
`

const Slide = styled.section<{ show?: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
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


const defaultState = (): State => ({ currentSlide: 'projectPhase', clippyVariant: 'focus' })

export default function NewProjectPage() {
  const [state, setState] = useState<State>(defaultState)
  const { t } = useTranslation()
  const isCurrentSlide = (slide: string) => state.currentSlide === slide;

  return <MainContainer>
    <h1>Neues Projekt</h1>
    <ClippyStage variant={state.clippyVariant}>
      <Slide show={isCurrentSlide("projectPhase")}>
        <p>{t("slides.projectPhase.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, projectPhase: 'idea', currentSlide: 'targetAudience' }))}>{t("slides.projectPhase.answers.idea")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, projectPhase: 'implementation', currentSlide: 'targetAudience' }))}>{t("slides.projectPhase.answers.implementation")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("targetAudience")}>
        <p>{t("slides.targetAudience.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'toolType', targetAudience: "bundesebene" }))}>{t("slides.targetAudience.answers.bundesebene")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'toolType', targetAudience: "canton" }))}>{t("slides.targetAudience.answers.canton")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'toolType', targetAudience: "external" }))}>{t("slides.targetAudience.answers.external")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("toolType")}>
        <p>{t("slides.toolType.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'loginNeeded', toolType: "dataProcessing" }))}>{t("slides.toolType.answers.dataProcessing")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'loginNeeded', toolType: "contentOnly" }))}>{t("slides.toolType.answers.contentOnly")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("loginNeeded")}>
        <p>{t("slides.loginNeeded.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'evaluation' }))}>{t("slides.loginNeeded.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'evaluation' }))}>{t("slides.loginNeeded.answers.no")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("evaluation")}>
        <p>{t("slides.evaluation.text")}</p>
        <code>{JSON.stringify(state)}</code>
        <ul>
          <li></li>
        </ul>
      </Slide>

    </ClippyStage >
  </MainContainer >
}
