import styled from '@emotion/styled'
import React from 'react'
import ClippyStage from '../components/ClippyStage'

const MainContainer = styled.main`
  padding: 1rem;
  height: 100%;
`

export default function NewProjectPage() {
  return <MainContainer>
    <h1>Neues Projekt</h1>
    <ClippyStage>
      <p>
        Hast du eine Idee oder bist du schon mitten in der Umsetzung?
      </p>
    </ClippyStage>
  </MainContainer>
}
