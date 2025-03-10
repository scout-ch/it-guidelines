import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import { MainContainer } from '../../App'

export default function NewCompletionProjectPage() {

  const { t } = useTranslation()

  return <MainContainer>
    <Helmet>
      <title>{t('new_completion_project_page.title')}</title>
    </Helmet>
    <h1>{t('new_completion_project_page.title')}</h1>
  </MainContainer >
}
