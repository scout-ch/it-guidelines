// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MainContainer, Ul } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AcquisitionPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('acquisition_page.title')}</title>
  </Helmet>
    <h1>{t('acquisition_page.title')}</h1>
    <p>
      {t('acquisition_page.intro.text')}
      <Ul>
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
      </Ul>
    </p>
    <h2><FontAwesomeIcon icon="shopping-cart" /> {t('acquisition_page.acquisition.title')}</h2>
    <p>
      <Ul>
        <li>{t('acquisition_page.acquisition.one')}</li>
        <li>{t('acquisition_page.acquisition.two')}</li>
        <li>{t('acquisition_page.acquisition.three')}</li>
        <li>{t('acquisition_page.acquisition.four')}</li>
        <li>{t('acquisition_page.acquisition.five')}</li>
        <li>{t('acquisition_page.acquisition.six')}</li>
        <li>{t('acquisition_page.acquisition.seven')}</li>
        <li>{t('acquisition_page.acquisition.eight')}</li>
      </Ul>
    </p>
    <h2><FontAwesomeIcon icon="tools" /> {t('acquisition_page.operation.title')}</h2>
    <p>
      <Ul>
        <li>{t('acquisition_page.operation.one')}</li>
        <li>{t('acquisition_page.operation.two')}</li>
        <li>{t('acquisition_page.operation.three')}</li>
        <li>{t('acquisition_page.operation.four')}</li>
        <li>{t('acquisition_page.operation.five')}</li>
      </Ul>
    </p>
  </MainContainer>
}
