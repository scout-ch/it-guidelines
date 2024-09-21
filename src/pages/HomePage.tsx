// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { A, Box, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const Card = styled.div`
  background-color: rgba(128,128,128, 0.3);
  border-radius: 5px;
  padding: 0 10px 10px 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  button {
    background-color: var(--color-primary-light);
    a {
      color: white;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
  }
`

export default function HomePage() {
  const { t } = useTranslation()

  return <MainContainer>
    <Helmet>
      <title>{t('home_page.title')}</title>
    </Helmet>
    <h1><FontAwesomeIcon icon="compass" /> {t('home_page.title')}</h1>
    <p>{t('home_page.introduction')}</p>
    <p>
      <h2>{t('home_page.content')}</h2>
      <ButtonContainer>
        <Card>
          <h2>1. {t('home_page.digitalisation')}</h2>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
           invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
          <Button><Link to="/digitalisation">{t('home_page.digitalisation')}</Link></Button>
        </Card>
        <Card>
          <h2>2. {t('home_page.it_guidelines')}</h2>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
           invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
          <Button><Link to="/it-guidelines">{t('home_page.it_guidelines')}</Link></Button>
        </Card>
        <Card>
          <h2>3. {t('home_page.completion')}</h2>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
           invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
          <Button><Link to="/completion">{t('home_page.completion')}</Link></Button>
        </Card>
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
