// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import {
  Link,
} from "react-router-dom"


export default function HomePage() {
  const { t } = useTranslation()

  const A = styled.a`
  color: white;

  &:hover {
    color: white;
    opacity: 0.5;
  }
`
  return <MainContainer>
  <Helmet>
    <title>{t('home_page.title')}</title>
  </Helmet>
    <h1>{t('home_page.title')}</h1>
    <p>{t('home_page.introduction')}</p>
    <p>
      {t('home_page.new_project')}{' '}
      <Link style={{color: 'white'}} to="/it-guidelines/new-project">{t('new_project_page.title')}</Link>
    </p>
    <h2>Downloads</h2>
    <ul>
      <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_de.pdf'} download>Richtlinien DE</A></li>
      <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li>
    </ul>
  </MainContainer>
}
