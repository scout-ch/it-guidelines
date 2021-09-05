// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CommunityPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('community_page.title')}</title>
  </Helmet>
    <h1><FontAwesomeIcon icon="users" /> {t('community_page.title')}</h1>
    <p>
    {t('community_page.intro')}
    <ul>
        <li>{t('community_page.one')}</li>
        <li>{t('community_page.two')}</li>
      </ul>
    </p>
    <p>
    {t('community_page.intro2')}
    <ul>
        <li>{t('community_page.three')}</li>
        <li>{t('community_page.four')}</li>
      </ul>
    </p>
  </MainContainer>
}
