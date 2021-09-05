// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import {
  Link,
} from "react-router-dom";


export default function HomePage() {
  const { t } = useTranslation()

  const A = styled.a`
  color: white;

  &:hover {
    color: white;
    opacity: 0.5;
  }
`
  const Infobox = styled.p`
    background: rgba(250, 250, 250, 0.8);
    border: 1px solid;
    color: black;
    padding: 9px;
    width: 70%;
    border-radius: 8px;
  `

  const Box = styled.div`
    display: flex;
    margin-top: 60px;
    border-top: 1px solid white;
  `

  return <MainContainer>
  <Helmet>
    <title>{t('home_page.title')}</title>
  </Helmet>
    <h1>{t('home_page.title')}</h1>
    <p>{t('home_page.introduction')}</p>
    <Infobox>
      {t('home_page.new_project')}{' '}
      <Link to="/it-guidelines/new-project">{t('new_project_page.title')}</Link>
    </Infobox>
    <p>
    <h2>{t('home_page.content')}</h2>
      <ul>
        <li><Link style={{color: 'white'}} to="/it-guidelines/priciples">{t('home_page.principles')}</Link></li>
        <li><Link style={{color: 'white'}} to="/it-guidelines/security">{t('home_page.information_security')}</Link></li>
        <li><Link style={{color: 'white'}} to="/it-guidelines/acquisition">{t('home_page.acquisition')}</Link></li>
        <li><Link style={{color: 'white'}} to="/it-guidelines/community">{t('home_page.community')}</Link></li>
      </ul>
    </p>
    <Box>
      <div>
        <h3>{t('home_page.contact')}</h3>
        <ul>
          <li><A href="mailto:itkom@pbs.com">{t('home_page.mail')}</A></li>
          <li><A href="https://github.com/scout-ch">{t('home_page.github')}</A></li>
        </ul>
      </div>

      <div>
        <h3>{t('home_page.downloads')}</h3>
        <ul>
          <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_de.pdf'} download>Richtlinien DE</A></li>
          <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li>
        </ul>
      </div>
    </Box>
  </MainContainer>
}
