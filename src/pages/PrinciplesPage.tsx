// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import {
  Link,
} from "react-router-dom"


export default function PrinciplesPage() {
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
    <title>{t('principles_page.title')}</title>
  </Helmet>
    <h1>{t('principles_page.title')}</h1>
    <p>
      <ol>
        <li>{t('principles_page.one')}</li>
        <li>{t('principles_page.two')}</li>
        <li>{t('principles_page.three')}</li>
        <li>{t('principles_page.four')}</li>
        <li>{t('principles_page.five')}</li>
        <li>{t('principles_page.six')}</li>
        <li>{t('principles_page.seven')}</li>
        <li>{t('principles_page.eight')}</li>
        <li>
          {t('principles_page.nine.priciple')}
          <ul>
            <li>{t('principles_page.nine.one')}</li>
            <li>{t('principles_page.nine.two')}</li>
            <li>{t('principles_page.nine.three')}</li>
          </ul>
        </li>
        <li>{t('principles_page.ten')}</li>
        <li>
          {t('principles_page.eleven.priciple')}
          <ul>
            <li>{t('principles_page.eleven.one')}</li>
            <li>{t('principles_page.eleven.two')}</li>
          </ul>
        </li>
      </ol>
    </p>
  </MainContainer>
}
