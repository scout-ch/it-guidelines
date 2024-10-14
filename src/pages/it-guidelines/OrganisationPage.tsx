// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation, Ul } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OrganisationPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{`${t('it_guidelines_page.title')} - ${t('organisation_page.title')}`}</title>
  </Helmet>
    <NavLocation>{`${t('it_guidelines_page.title')} - ${t('organisation_page.title')}`}</NavLocation>
    
    <h1><FontAwesomeIcon icon="calendar-alt" /> {t('organisation_page.title')}</h1>
    <p>
      {t('organisation_page.intro')}
    </p>

    <h2>{t('organisation_page.po.title')}</h2>
    <p>
      {t('organisation_page.po.intro')}
      <Ul>
        <li>{t('organisation_page.po.one')}</li>
        <li>{t('organisation_page.po.two')}</li>
        <li>{t('organisation_page.po.three')}</li>
        <li>{t('organisation_page.po.four')}</li>
        <li>{t('organisation_page.po.five')}</li>
        <li>{t('organisation_page.po.six')}</li>
        <li>{t('organisation_page.po.seven')}</li>
      </Ul>
    </p>

    <h2>{t('organisation_page.itkom.title')}</h2>
    <p>
      <Ul>
        <li>{t('organisation_page.itkom.one')}</li>
        <li>{t('organisation_page.itkom.two')}</li>
        <li>{t('organisation_page.itkom.three')}</li>
        <li>{t('organisation_page.itkom.four')}</li>
        <li>{t('organisation_page.itkom.five')}</li>
      </Ul>
    </p>

    <h2>{t('organisation_page.vl.title')}</h2>
    <p>
      <Ul>
        <li>{t('organisation_page.vl.one')}</li>
        <li>{t('organisation_page.vl.two')}</li>
        <li>{t('organisation_page.vl.three')}</li>
        <li>{t('organisation_page.vl.four')}</li>
      </Ul>
    </p>
  </MainContainer>
}
