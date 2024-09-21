// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { A, Box, Infobox, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import {
  Link,
} from "react-router-dom";


export default function CompletionPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('completion_page.title')}</title>
  </Helmet>
    <h1>{t('completion_page.title')}</h1>
    <p>{t('completion_page.introduction')}</p>
    <Infobox>
      {t('completion_page.complete_project')}{' '}
      <Link to="/digitalisation/new-project">{t('new_project_completion_page.title')}</Link>
    </Infobox>
    <h2>{t('completion_page.content')}</h2>

    <Box>
      <div>
        <h3>{t('completion_page.downloads')}</h3>
        <Ul>
          <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_de.pdf'} download>Hilfsblatt DE</A></li>
          {/* <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li> */}
        </Ul>
      </div>
    </Box>

  </MainContainer>
}
