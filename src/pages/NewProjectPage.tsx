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
  apiNeeded?: "midata" | "other" | "no"
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
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'apiNeeded', loginNeeded: "yes" }))}>{t("slides.loginNeeded.answers.yes")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'apiNeeded', loginNeeded: "no" }))}>{t("slides.loginNeeded.answers.no")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("apiNeeded")}>
        <p>{t("slides.apiNeeded.question")}</p>
        <ButtonContainer>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNeeded: "midata" }))}>{t("slides.apiNeeded.answers.midata")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNeeded: "other" }))}>{t("slides.apiNeeded.answers.other")}</Button>
          <Button onClick={() => setState(prevState => ({ ...prevState, currentSlide: 'similarToolAvailable', apiNeeded: "no" }))}>{t("slides.apiNeeded.answers.no")}</Button>
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
        <h2>ToDo</h2>
        <ul>
          <li>Kontakt aufnehmen mit der ITKom</li>
          {state["responsibility"] !== 'yes' && (<li>Verantwortliche Person definieren</li>)}
          {state["apiNeeded"] === 'midata' && (<li>Definieren welche Daten von der MiData benötigt werden</li>)}
          {state["similarToolAvailable"] === 'maybe' && (<li>Herausfinden ob es nicht doch schon ähnliche Tools gibt</li>)}
          {(state["loginNeeded"] === 'no' && state["sensitiveData"] === 'yes') && 
           (<li>Abklären ob es wirklich kein Login braucht</li>)}
        </ul>
        
        <h2>Antworten</h2>
        {console.log(state)}
          <p><em>{t('slides.projectPhase.question')}:</em><br/> {t(`slides.projectPhase.answers.${state.projectPhase}`)}</p>
          <p><em>{t('slides.targetAudience.question')}:</em><br/> {t(`slides.targetAudience.answers.${state.targetAudience}`)}</p>
          <p><em>{t('slides.toolType.question')}:</em><br/> {t(`slides.toolType.answers.${state.toolType}`)}</p>
          <p><em>{t('slides.sensitiveData.question')}:</em><br/> {t(`slides.sensitiveData.answers.${state.sensitiveData}`)}</p>
          <p><em>{t('slides.loginNeeded.question')}:</em><br/> {t(`slides.loginNeeded.answers.${state.loginNeeded}`)}</p>
          <p><em>{t('slides.apiNeeded.question')}:</em><br/> {t(`slides.apiNeeded.answers.${state.apiNeeded}`)}</p>
          <p><em>{t('slides.similarToolAvailable.question')}:</em><br/> {t(`slides.similarToolAvailable.answers.${state.similarToolAvailable}`)}</p>
          <p><em>{t('slides.responsibility.question')}:</em><br/> {t(`slides.responsibility.answers.${state.responsibility}`)}</p>
      </Slide>

    </ClippyStage >
  </MainContainer >
}
