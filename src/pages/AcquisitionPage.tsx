// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'
import { useTranslation } from 'react-i18next'

export default function AcquisitionPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('acquisition_page.title')}</title>
  </Helmet>
    <h1>{t('acquisition_page.title')}</h1>
    <p>
      {t('acquisition_page.intro.text')}
      <ul>
        <li>
          {t('acquisition_page.intro.standard.text')}
          <ul>
            <li>{t('acquisition_page.intro.standard.one')}</li>
            <li>{t('acquisition_page.intro.standard.two')}</li>
          </ul>
        </li>
        <br/>
        <li>
          {t('acquisition_page.intro.inhouse.text')}
          <ul>
            <li>{t('acquisition_page.intro.inhouse.one')}</li>
            <li>{t('acquisition_page.intro.inhouse.two')}</li>
          </ul>
        </li>
      </ul>
    </p>
    <h2>{t('acquisition_page.acquisition.title')}</h2>
    <p>
    <ul>
        <li>{t('acquisition_page.acquisition.one')}</li>
        <li>{t('acquisition_page.acquisition.two')}</li>
        <li>{t('acquisition_page.acquisition.three')}</li>
        <li>{t('acquisition_page.acquisition.four')}</li>
        <li>{t('acquisition_page.acquisition.five')}</li>
        <li>{t('acquisition_page.acquisition.six')}</li>
        <li>{t('acquisition_page.acquisition.seven')}</li>
        <li>{t('acquisition_page.acquisition.eight')}</li>
      </ul>
    </p>
    <h2>{t('acquisition_page.operation.title')}</h2>
    <p>
    <ul>
        <li>{t('acquisition_page.operation.one')}</li>
        <li>{t('acquisition_page.operation.two')}</li>
        <li>{t('acquisition_page.operation.three')}</li>
        <li>{t('acquisition_page.operation.four')}</li>
        <li>{t('acquisition_page.operation.five')}</li>
      </ul>
    </p>
  </MainContainer>
}
