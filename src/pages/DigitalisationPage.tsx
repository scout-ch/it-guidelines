// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { A, Box, Infobox, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import {
  Link,
} from "react-router-dom";


export default function DigitalisationPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('digitalisation_page.title')}</title>
  </Helmet>
    <h1>{t('digitalisation_page.title')}</h1>
    <p>{t('digitalisation_page.introduction')}</p>
    <Infobox>
      {t('digitalisation_page.new_project')}{' '}
      <Link to="/digitalisation/new-project">{t('digitalisation_page.title')}</Link>
    </Infobox>
    <h2>{t('digitalisation_page.content')}</h2>
    <ul>
      <li><Link to="/digitalisation/documentation">{t('digitalisation_page.documentation')}</Link></li>
    </ul>
    

    <Box>
      <div>
        <h3>{t('digitalisation_page.downloads')}</h3>
        <Ul>
          <li><A href={process.env.PUBLIC_URL + '/docs/MerkblattGrundsätzederDigitalisierung.pdf'} download>Merkblatt DE</A></li>
          <li>Hier findest du kurze Beschreibungen, die Vor- und Nachteile sowie Beispiele von verschiedenen Tools: <br/><A href={process.env.PUBLIC_URL + '/docs/BeschreibungMedien.pdf'} download>Beschreibung Medien DE</A></li>
          {/* <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li> */}
        </Ul>
      </div>
    </Box>

  </MainContainer>
}
