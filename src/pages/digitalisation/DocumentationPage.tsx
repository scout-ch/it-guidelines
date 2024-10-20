// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation } from '../../App'
import { useTranslation } from 'react-i18next'


export default function DocumentationPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('documentation_page.title')}</title>
  </Helmet>
  <NavLocation>{`${t('it_guidelines_page.title')} - ${t('documentation_page.title')}`}</NavLocation>

    <h1>{t('documentation_page.title')}</h1>
    <p>{t('documentation_page.introduction')}</p>

  </MainContainer>
}
