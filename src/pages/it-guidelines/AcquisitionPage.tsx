// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation, Ul } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTools } from '@fortawesome/free-solid-svg-icons'

export default function AcquisitionPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('acquisition_page.title')}</title>
  </Helmet>
    <NavLocation>{`${t('digitalisation_page.title')} - ${t('acquisition_page.title')}`}</NavLocation>

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
    <h2><FontAwesomeIcon icon={faShoppingCart} /> {t('acquisition_page.acquisition.title')}</h2>
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
    <h2><FontAwesomeIcon icon={faTools} /> {t('acquisition_page.operation.title')}</h2>
    <p>
      <Ul>
        <li>{t('acquisition_page.operation.one')}</li>
        <li>{t('acquisition_page.operation.two')}</li>
        <li>{t('acquisition_page.operation.three')}</li>
        <li>{t('acquisition_page.operation.four')}</li>
        <li>{t('acquisition_page.operation.five')}</li>
        <li>{t('acquisition_page.operation.six')}</li>
      </Ul>
    </p>
  </MainContainer>
}
