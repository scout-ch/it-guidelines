// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { A, Box, Infobox, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import {
  Link,
} from "react-router-dom";


export default function ItGuidelinesPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('it_guidelines_page.title')}</title>
  </Helmet>
    <h1>{t('it_guidelines_page.title')}</h1>
    <p>{t('it_guidelines_page.introduction')}</p>
    <Infobox>
      {t('it_guidelines_page.new_project')}{' '}
      <Link to="/it-guidelines/new-project">{t('new_project_guidelines_page.title')}</Link>
    </Infobox>
    <p>
    <h2>{t('it_guidelines_page.content')}</h2>
      <ul>
        <li><Link to="/it-guidelines/principles">{t('it_guidelines_page.principles')}</Link></li>
        <li><Link to="/it-guidelines/security">{t('it_guidelines_page.information_security')}</Link></li>
        <li><Link to="/it-guidelines/acquisition">{t('it_guidelines_page.acquisition')}</Link></li>
        <li><Link to="/it-guidelines/community">{t('it_guidelines_page.community')}</Link></li>
        <li><Link to="/it-guidelines/organisation">{t('it_guidelines_page.organisation')}</Link></li>
      </ul>
    </p>
    <Box>
      <div>
        <h3>{t('it_guidelines_page.downloads')}</h3>
        <Ul>
          <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_de.pdf'} download>Richtlinien DE</A></li>
          <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li>
        </Ul>
      </div>
    </Box>
  </MainContainer>
}
