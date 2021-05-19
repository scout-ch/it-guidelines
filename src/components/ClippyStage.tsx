import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import Clippy from './Clippy'

const Container = styled.div`
  background: url("data:image/svg+xml,<svg width='779' height='468' viewBox='0 0 779 468' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='389.5' cy='234' rx='389.5' ry='234' fill='rgb(255,255,255)' fill-opacity='0.5'/></svg>");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 1em;
  box-shadow: .5em .5em 2em rgba(0,0,0,0.25);
  max-width: 800px;
  color: black;
  padding: 1em;
  margin-bottom: 2em;
`

const ClippyContainer = styled.div`
  text-align: right;
`

export default function ClippyStage({ children }: PropsWithChildren<{}>) {
  return <Container>
    <ContentContainer>
      {children}
    </ContentContainer>
    <ClippyContainer>
      <Clippy></Clippy>
    </ClippyContainer>
  </Container>
}
