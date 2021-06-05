// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation, Trans } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('home_page.title')}</title>
  </Helmet>
    <h1>{t('home_page.title')}</h1>
    Downloads
    <ul>
      <li><a href='../docs/guidelines_de.pdf' download>Richtlinien DE</a></li>
      <li><a href='../docs/guidelines_fr.pdf' download>Lignes directrices FR</a></li>
    </ul>
  </MainContainer>
}
