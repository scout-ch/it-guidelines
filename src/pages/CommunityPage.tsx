// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'

export default function CommunityPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('community_page.title')}</title>
  </Helmet>
    <h1>{t('community_page.title')}</h1>
    <p>
    </p>
  </MainContainer>
}
