import styled from '@emotion/styled'
import React, { useState } from 'react'
import ClippyStage from '../components/ClippyStage'
import { useTranslation, Trans } from 'react-i18next';

const MainContainer = styled.main`
  padding: 1rem;
  flex-grow: 1;
`

const Slide = styled.section<{ show?: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
  word-break: break-all;
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
  clippyVariant: "" | "focus" | "rolleye" | 'angry';
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
  const updateState = (newState: Partial<State>) => setState(prevState => ({ ...prevState, ...newState }))
  const { t } = useTranslation()
  const isCurrentSlide = (slide: string) => state.currentSlide === slide;

  return <MainContainer>
    <h1>Neues Projekt</h1>
    <ClippyStage variant={state.clippyVariant}>
      <Slide show={isCurrentSlide("projectPhase")}>
        <p>{t("slides.projectPhase.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'targetAudience', projectPhase: 'idea' })}>{t("slides.projectPhase.buttons.idea")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'targetAudience', projectPhase: 'implementation' })}>{t("slides.projectPhase.buttons.implementation")}</Button>
        </ButtonContainer>
      </Slide>
      <Slide show={isCurrentSlide("targetAudience")}>
        <p>{t("slides.targetAudience.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'toolType', targetAudience: "bundesebene" })}>{t("slides.targetAudience.buttons.bundesebene")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'toolType', targetAudience: "canton" })}>{t("slides.targetAudience.buttons.canton")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'toolType', targetAudience: "external" })}> {t("slides.targetAudience.buttons.external")}</Button >
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("toolType")}>
        <p>{t("slides.toolType.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'sensitiveData', toolType: "dataProcessing" })}>{t("slides.toolType.buttons.dataProcessing")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'sensitiveData', toolType: "contentOnly" })}>{t("slides.toolType.buttons.contentOnly")}</Button>
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("sensitiveData")}>
        <p>{t("slides.sensitiveData.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'loginNeeded', sensitiveData: "yes" })}>{t("slides.sensitiveData.buttons.yes")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'loginNeeded', sensitiveData: "no" })}>{t("slides.sensitiveData.buttons.no")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'loginNeeded', sensitiveData: "maybe" })}> {t("slides.sensitiveData.buttons.maybe")}</Button >
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("loginNeeded")}>
        <p>{t("slides.loginNeeded.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'apiNedded', loginNeeded: "yes" })}>{t("slides.loginNeeded.buttons.yes")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'apiNedded', loginNeeded: "no" })}>{t("slides.loginNeeded.buttons.no")}</Button>
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("apiNedded")}>
        <p>{t("slides.apiNedded.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'similarToolAvailable', apiNedded: "midata" })}>{t("slides.apiNedded.buttons.midata")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'similarToolAvailable', apiNedded: "other" })}>{t("slides.apiNedded.buttons.other")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'similarToolAvailable', apiNedded: "no" })}>{t("slides.apiNedded.buttons.no")}</Button>
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("similarToolAvailable")}>
        <p>{t("slides.similarToolAvailable.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'responsibility', similarToolAvailable: "yes" })}>{t("slides.similarToolAvailable.buttons.yes")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'responsibility', similarToolAvailable: "no" })}>{t("slides.similarToolAvailable.buttons.no")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'similarToolAvailableMaybe', clippyVariant: 'angry' })}>{t("slides.similarToolAvailable.buttons.maybe")}</Button>
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("similarToolAvailableMaybe")}>
        <p>
          <Trans t={t}>slides.similarToolAvailableMaybe.text</Trans>
        </p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'similarToolAvailable', clippyVariant: "" })}>{t("slides.similarToolAvailable.buttons.yes")}</Button>
        </ButtonContainer >
      </Slide >
      <Slide show={isCurrentSlide("responsibility")}>
        <p>{t("slides.responsibility.text")}</p>
        <ButtonContainer>
          <Button onClick={() => updateState({ currentSlide: 'evaluation', responsibility: "yes" })}>{t("slides.responsibility.buttons.yes")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'evaluation', responsibility: "no" })}>{t("slides.responsibility.buttons.no")}</Button>
          <Button onClick={() => updateState({ currentSlide: 'evaluation', responsibility: "maybe" })}>{t("slides.responsibility.buttons.maybe")}</Button>
        </ButtonContainer >
      </Slide >
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
        <p><em>{t('slides.projectPhase.question')}:</em><br /> {t(`slides.projectPhase.answers.${state.projectPhase}`)}</p>
        <p><em>{t('slides.targetAudience.question')}:</em><br /> {t(`slides.targetAudience.answers.${state.targetAudience}`)}</p>
        <p><em>{t('slides.toolType.question')}:</em><br /> {t(`slides.toolType.answers.${state.toolType}`)}</p>
        <p><em>{t('slides.sensitiveData.question')}:</em><br /> {t(`slides.sensitiveData.answers.${state.sensitiveData}`)}</p>
        <p><em>{t('slides.loginNeeded.question')}:</em><br /> {t(`slides.loginNeeded.answers.${state.loginNeeded}`)}</p>
        <p><em>{t('slides.apiNeeded.question')}:</em><br /> {t(`slides.apiNeeded.answers.${state.apiNeeded}`)}</p>
        <p><em>{t('slides.similarToolAvailable.question')}:</em><br /> {t(`slides.similarToolAvailable.answers.${state.similarToolAvailable}`)}</p>
        <p><em>{t('slides.responsibility.question')}:</em><br /> {t(`slides.responsibility.answers.${state.responsibility}`)}</p>
      </Slide>

    </ClippyStage >
  </MainContainer >
}
