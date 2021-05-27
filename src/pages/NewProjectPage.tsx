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
  targetAudience?: "bundesebene" | "canton" | "external"
  toolType?: "dataProcessing" | "contentOnly"
  sensitiveData?: "yes" | "no" | "maybe"
  loginNeeded?: "yes" | "no"
  apiNedded?: "midata" | "other" | "no"
  similarToolAvailable?: "yes" | "no" | "maybe"
  responsibility?: "yes" | "no" | "maybe"
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
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'targetAudience', projectPhase: 'idea' }))}>{t("slides.projectPhase.answers.idea")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'targetAudience', projectPhase: 'implementation' }))}>{t("slides.projectPhase.answers.implementation")}</Button>
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
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'sensitiveData', toolType: "dataProcessing" }))}>{t("slides.toolType.answers.dataProcessing")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'sensitiveData', toolType: "contentOnly" }))}>{t("slides.toolType.answers.contentOnly")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("sensitiveData")}>
        <p>{t("slides.sensitiveData.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'loginNeeded', sensitiveData: "yes" }))}>{t("slides.sensitiveData.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'loginNeeded', sensitiveData: "no" }))}>{t("slides.sensitiveData.answers.no")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'loginNeeded', sensitiveData: "maybe" }))}>{t("slides.sensitiveData.answers.maybe")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("loginNeeded")}>
        <p>{t("slides.loginNeeded.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'apiNedded', loginNeeded: "yes" }))}>{t("slides.loginNeeded.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'apiNedded', loginNeeded: "no" }))}>{t("slides.loginNeeded.answers.no")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("apiNedded")}>
        <p>{t("slides.apiNedded.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNedded: "midata" }))}>{t("slides.apiNedded.answers.midata")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNedded: "other" }))}>{t("slides.apiNedded.answers.other")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNedded: "no" }))}>{t("slides.apiNedded.answers.no")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("similarToolAvailable")}>
        <p>{t("slides.similarToolAvailable.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'responsibility', similarToolAvailable: "yes" }))}>{t("slides.similarToolAvailable.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'responsibility', similarToolAvailable: "no" }))}>{t("slides.similarToolAvailable.answers.no")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'responsibility', similarToolAvailable: "maybe" }))}>{t("slides.similarToolAvailable.answers.maybe")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("responsibility")}>
        <p>{t("slides.responsibility.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'evaluation', responsibility: "yes" }))}>{t("slides.responsibility.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'evaluation', responsibility: "no" }))}>{t("slides.responsibility.answers.no")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'evaluation', responsibility: "maybe" }))}>{t("slides.responsibility.answers.maybe")}</Button>
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
