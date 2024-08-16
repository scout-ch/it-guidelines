// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { A, Box, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import {
  Link,
} from "react-router-dom";

export const Button = styled.button`
  font-size: 1em;
  padding: .5em;
  text-align: center;
  min-width: 5em;
  background-color: #DDD;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 0.25em;

  &:hover {
    /* background-color: #eee; */
    outline: 3px solid var(--color-primary)
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

export default function HomePage() {
  const { t } = useTranslation()

  return <MainContainer>
    <Helmet>
      <title>{t('home_page.title')}</title>
    </Helmet>
    <h1>{t('home_page.title')}</h1>
    <p>{t('home_page.introduction')}</p>
    <p>
      <h2>{t('home_page.content')}</h2>
      <ButtonContainer>
        <Button><Link to="/digitalisation">{t('home_page.digitalisation')}</Link></Button>
        <Button><Link to="/it-guidelines">{t('home_page.it_guidelines')}</Link></Button>
      </ButtonContainer>
    </p>

    <Box>
      <div>
        <h3>{t('home_page.contact')}</h3>
        <Ul>
          <li><A href="mailto:itkom@pbs.com">{t('home_page.mail')}</A></li>
          <li><A href="https://github.com/scout-ch">{t('home_page.github')}</A></li>
        </Ul>
      </div>
    </Box>
  </MainContainer>
}
