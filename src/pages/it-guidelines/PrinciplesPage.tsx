// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function PrinciplesPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('principles_page.title')}</title>
  </Helmet>
  <NavLocation>{`${t('it_guidelines_page.title')} - ${t('principles_page.title')}`}</NavLocation>
  
    <h1><FontAwesomeIcon icon={faScroll} /> {t('principles_page.title')}</h1>
    <p>
      <ol>
        <li>{t('principles_page.one')}</li>
        <li>{t('principles_page.two')}</li>
        <li>{t('principles_page.three')}</li>
        <li>{t('principles_page.four')}</li>
        <li>{t('principles_page.five')}</li>
        <li>{t('principles_page.six')}</li>
        <li>{t('principles_page.seven')}</li>
        <li>{t('principles_page.eight')}</li>
        <li>
          {t('principles_page.nine.priciple')}
          <ul>
            <li>{t('principles_page.nine.one')}</li>
            <li>{t('principles_page.nine.two')}</li>
            <li>{t('principles_page.nine.three')}</li>
            <li>{t('principles_page.nine.four')}</li>
          </ul>
        </li>
        <li>{t('principles_page.ten')}</li>
        <li>
          {t('principles_page.eleven.priciple')}
          <ul>
            <li>{t('principles_page.eleven.one')}</li>
            <li>{t('principles_page.eleven.two')}</li>
          </ul>
        </li>
      </ol>
    </p>
    <Link to="/it-guidelines">{t('back')}</Link>
  </MainContainer>
}
