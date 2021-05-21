import styled from '@emotion/styled'
import React from 'react'
import ClippyStage from '../components/ClippyStage'

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

export default function NewProjectPage() {
  return <MainContainer>
    <h1>Neues Projekt</h1>
    <ClippyStage variant="focus">
      <p>
        Hast du eine Idee oder bist du schon mitten in der Umsetzung?
      </p>
      <ButtonContainer>
        <Button type="button">Idee</Button>
        <Button type="button">Umsetzung</Button>
      </ButtonContainer>
    </ClippyStage>
  </MainContainer>
}
