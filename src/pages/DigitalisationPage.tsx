// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { A, Box, Infobox, MainContainer } from '../App'
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
      <Link to="/digitalisation/new-project">{t('new_project_guidelines_page.title')}</Link>
    </Infobox>
    <h2>{t('digitalisation_page.content')}</h2>
    <ul>
      <li><Link to="/digitalisation/documentation">{t('digitalisation_page.documentation')}</Link></li>
    </ul>
    

    <Box>
      <div>
        <h3>{t('digitalisation_page.downloads')}</h3>
        <ul>
          <li><A href={'/docs/MerkblattGrundsätzederDigitalisierung.pdf'} download>Merkblatt DE</A></li>
          <li><A href={'/docs/MerkblattGrundsätzederDigitalisierung_FR.pdf'} download>Fiche d’information principes de la numérisation FR</A></li>
          <li>{t('digitalisation_page.media_description')} <br/><A href={'/docs/BeschreibungMedien.pdf'} download>Beschreibung Medien DE</A>
          <br/><A href={'/docs/BeschreibungMedien_FR.pdf'} download>Description des médias FR</A></li>
        </ul>
      </div>
    </Box>

  </MainContainer>
}
